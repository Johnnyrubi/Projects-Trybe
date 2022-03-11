import csv


def reading(path_to_file):
    lista_vazia = []
    with open(path_to_file) as file:
        keys = ["nome", "comida", "dia"]
        status_reader = csv.DictReader(file, delimiter=",", fieldnames=keys)
        for item in status_reader:
            lista_vazia.append(item)
    return lista_vazia


def analyze_log(path_to_file):
    fileRead = reading(path_to_file)
    print(fileRead)
