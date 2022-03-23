from .file_management import txt_importer
import sys


def process(path_file, instance):
    """Aqui irá sua implementação"""
    lido = txt_importer(path_file)

    mensagem = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(lido),
        "linhas_do_arquivo": lido
    }

    if any(i["nome_do_arquivo"] == path_file for i in instance.fila):
        return None

    instance.enqueue(mensagem)
    sys.stdout.write(str(mensagem))


def remove(instance):
    """Aqui irá sua implementação"""
    if len(instance) == 0:
        sys.stdout.write("Não há elementos\n")
    else:
        tirado = instance.dequeue()["nome_do_arquivo"]
        sys.stdout.write(f"Arquivo {tirado} removido com sucesso\n")


def file_metadata(instance, position):
    """Aqui irá sua implementação"""
    try:
        file = instance.search(position)
        sys.stdout.write(str(file))
    except IndexError:
        sys.stderr.write("Posição inválida")
