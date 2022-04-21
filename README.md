# Boas vindas ao projeto TING(Trybe is not Google)!

# Neste Projeto irei:

- Manipular Pilhas

- Manipular Deque

- Manipular Nó & Listas ligadas

- Manipular Listas duplamentes ligadas

--- 

## O que deverá ser desenvolvido

A `Trybe` lhe convida para implementar um programa que simule o algoritmo de indexação de documentos similar ao do Google. Ou seja, um programa que permita anexar arquivos de texto e posteriormente opere funções de busca sobre tais arquivos

> Com a quantidade de informações disponíveis na Web, encontrar o que você precisa seria quase impossível sem nenhuma ajuda para classificá-las. Os sistemas de classificação do Google organizam centenas de bilhões de páginas da Web, no índice da pesquisa, para fornecer os resultados mais úteis e relevantes em uma fração de segundo. Além disso tudo, a Google também precisa se preocupar em apresentar os resultados de uma maneira que ajude você a encontrar o que está procurando com mais facilidade ainda.

#### Analisar palavras

> Compreender o significado da sua pesquisa é crucial para retornarmos boas respostas. Por isso, para encontrar páginas com informações relevantes, nosso primeiro passo é analisar o significado das palavras na consulta de pesquisa. Desenvolvemos modelos linguísticos para decifrar as sequências de palavras que precisamos procurar no índice.

Não iremos nos apegar a análise de significados ou busca por sinônimos. Nosso objetivo será identificar ocorrências de termos em arquivos _TXT_. Neste contexto, devemos criar um programa que permita anexar arquivos de texto e posteriormente operar funções de busca sobre tais arquivos.

Sendo assim o programa deverá possuir dois módulos:

- Modo gerenciamento de arquivos;

- Modo de buscas.

```md
.
├── statics
│   ├── arquivo_teste.txt
│   ├── novo_paradigma_globalizado.txt
│   └── novo_paradigma_globalizado-min.txt
├── tests
├── ting_file_management
│   ├── file_management.py
│   └── file_process.py
├── ting_word_searches
│   └── word_search.py
├── README.md
├── requirements.txt
└── setup.cfg
```

Para executar os testes, lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

O arquivo `requirements.txt` contém todos as dependências que serão utilizadas no projeto, ele está agindo como se fosse um `package.json` de um projeto `Node.js`. 

---

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
- Entre na pasta do repositório que você acabou de clonar:

2. Crie o ambiente virtual para o projeto

- `python3 -m venv .venv && source .venv/bin/activate`

3. Instale as dependências

- `python3 -m pip install -r dev-requirements.txt`

Pronto agora você já está dentro do meu projeto e pode altera-lo!

## Testes

Com as dependências já instaladas, para executar os testes basta usar o comando:

```bash
$ python3 -m pytest
```

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse artigo: https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```

Esperto que goste!
