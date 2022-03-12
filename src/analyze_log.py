import csv


def reading(path_to_file):
    lista_vazia = []
    with open(path_to_file) as file:
        keys = ["costumer", "order", "day"]
        status_reader = csv.DictReader(file, delimiter=",", fieldnames=keys)
        for item in status_reader:
            lista_vazia.append(item)
    return lista_vazia


def FavoriteFood(arrayList, costumer):
    contador = [i["order"] for i in arrayList if i["costumer"] == costumer]
    return max(contador, key=contador.count)


def countArnaldoBurguer(arrayList):
    contador = [i["order"] for i in arrayList if i["costumer"] == "arnaldo"]
    return contador.count("hamburguer")


def foodNeverRequest(arrayList, costumer):
    count = {i["order"] for i in arrayList}
    contador = [i["order"] for i in arrayList if i["costumer"] == costumer]
    return count.difference(contador)


def daysWhoClientNotGo(arrayList, costumer):
    cont = {i["day"] for i in arrayList}
    contador = [i["day"] for i in arrayList if i["costumer"] == costumer]
    return cont.difference(contador)


def analyze_log(path_to_file):
    fileRead = reading(path_to_file)
    mariaResult = FavoriteFood(fileRead, "maria")
    arnaldoResult = countArnaldoBurguer(fileRead)
    joaoResult = foodNeverRequest(fileRead, "joao")
    joaoDays = daysWhoClientNotGo(fileRead, "joao")

    with open("data/mkt_campaign.txt", mode="w") as f:
        f.writelines([
            f"{mariaResult}\n"
            f"{arnaldoResult}\n"
            f"{joaoResult}\n"
            f"{joaoDays}\n"
        ])
