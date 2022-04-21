# Boas vindas ao Projeto de Algorithms!
---

# Habilidades

  - Estrutura de dados

  - Complexidade de algoritimos

  - Capacidade de interpretação do problema;

  - Capacidade de resolução do problema, de forma otimizada;
  
  - Analisar corretamente a ordem de complexidade de um algoritmo.

  - Recursividade

  - Algoritmos de ordenação e algoritmos de busca

---

## Desenvolvimento

Este repositório é composto por uma pasta, `challenges`. Essa pasta contém todos os arquivos que você utilizará nesse projeto.

Este repositório já contém um _template_ com a estrutura de diretórios e arquivos,. Veja abaixo:

```md
.
├── challenges
│   ├── challenge_anagrams.py
│   ├── challenge_find_the_duplicate.py
│   ├── challenge_palindromes_iterative.py
│   ├── challenge_palindromes_recursive.py
│   └── challenge_study_schedule.py
├── README.md
├── requirements.txt
└── setup.cfg
```

Lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

O arquivo `requirements.txt` contém todos as dependências que serão utilizadas no projeto, ele está agindo como se fosse um `package.json` de um projeto `Node.js`.

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse artigo: https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```

Para executar cada arquivo separadamente, execute o comando:

```bash
$ python3 nome_do_arquivo.py
```

---

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone `.
- Entre na pasta do repositório que você acabou de clonar

2. Crie o ambiente virtual para o projeto

- `python3 -m venv .venv && source .venv/bin/activate`

---

## Testes

Com as dependências já instaladas basta executar o comando:

```bash
python3 -m pytest
```

Com esse comando irá executar todos os testes do projeto.

Caso o teste falhe e você queira ter um print melhor do erro basta executar o seguinte comando:

```bash
python3 -m pytest -s -vv
```

Caso precise executar apenas um arquivo de testes basta executar o comando:

```bash
python3 -m pytest tests/nomedoarquivo.py
```
