import csv


def reading(path_to_file):
    lista_vazia = []
    with open(path_to_file) as file:
        keys = ["nome", "comida", "dia"]
        status_reader = csv.DictReader(file, delimiter=",", fieldnames=keys)
        for item in status_reader:
            lista_vazia.append(item)
    return lista_vazia


def countMariaFood(arrayList):
    contador = [i["comida"] for i in arrayList if i["nome"] == "maria"]
    return max(contador, key=contador.count)


def countArnaldoBurguer(arrayList):
    contador = [i["comida"] for i in arrayList if i["nome"] == "arnaldo"]
    return contador.count("hamburguer")


def countJoaoFoodNeverDid(arrayList):
    count = {i["comida"] for i in arrayList}
    contador = [i["comida"] for i in arrayList if i["nome"] == "joao"]
    return count.difference(contador)


def daysJoaoNotGo(arrayList):
    count = {i["dia"] for i in arrayList}
    contador = [i["dia"] for i in arrayList if i["nome"] == "joao"]
    return count.difference(contador)


def analyze_log(path_to_file):
    fileRead = reading(path_to_file)
    mariaResult = countMariaFood(fileRead)
    arnaldoResult = countArnaldoBurguer(fileRead)
    joaoResult = countJoaoFoodNeverDid(fileRead)
    joaoDays = daysJoaoNotGo(fileRead)

    with open("data/mkt_campaign.txt", mode="w") as f:
        f.writelines([
            f"{mariaResult}\n"
            f"{arnaldoResult}\n"
            f"{joaoResult}\n"
            f"{joaoDays}\n"
        ])
