
# Boas vindas ao Projeto Restaurant Orders!
---

## Habilidades

- Trabalhar com Hash map e Dict

- Trabalhar com Set

---

## O que deverá ser desenvolvido

A lanchonete Pão na Chapa, atualmente, possui um sistema de faturamento dos pedidos dos clientes, que salva o nome da pessoa, o pedido realizado, e dia do atendimento (dia da semana). O projeto consiste em ajudar a lanchonete a melhorar esse sistema para que ele possibilite extração de relatórios e, num segundo momento, a controlar seu estoque.
---
### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
- `git clone`.
- Entre na pasta do repositório que você acabou de clonar:

2. Crie o ambiente virtual para o projeto

- `python3 -m venv .venv && source .venv/bin/activate`

3. Instale as dependências

- `python3 -m pip install -r dev-requirements.txt`

## Testes

Para executar os testes, lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

**Instalação de dependências**

O arquivo `dev-requirements.txt` contém todos as dependências que serão utilizadas no projeto

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse [artigo.](https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1)

## Rodando os testes localmente

Para verificar se o seu projeto está correto basta executar o seguinte comando:

```bash
$ python3 -m pytest
```

## Linter

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```
