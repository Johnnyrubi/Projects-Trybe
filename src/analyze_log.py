import csv


def reading(path_to_file):
    lista_vazia = []
    with open(path_to_file) as file:
        keys = ["nome", "comida", "dia"]
        status_reader = csv.DictReader(file, delimiter=",", fieldnames=keys)
        for item in status_reader:
            lista_vazia.append(item)
    return lista_vazia


def FavoriteFood(arrayList, nome):
    contador = [i["comida"] for i in arrayList if i["nome"] == nome]
    return max(contador, key=contador.count)


def countArnaldoBurguer(arrayList):
    contador = [i["comida"] for i in arrayList if i["nome"] == "arnaldo"]
    return contador.count("hamburguer")


def foodNeverRequest(arrayList, nome):
    count = {i["comida"] for i in arrayList}
    contador = [i["comida"] for i in arrayList if i["nome"] == nome]
    return count.difference(contador)


def daysWhoClientNotGo(arrayList, nome):
    count = {i["dia"] for i in arrayList}
    contador = [i["dia"] for i in arrayList if i["nome"] == nome]
    return count.difference(contador)


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
