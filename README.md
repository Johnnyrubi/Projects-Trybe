Bem vindo ao projeto Mongodb Commerce

# Neste Projeto irei:

  * Utilizar o método `updateOne()` e `updateMany()`

  * Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`

  * Renomear campos e remover campos

  * Incorporar dados aos documentos através de arrays

  * Utilizar os operadores `$pop`, `$pull` e `$push`
  
  * Utilizar o operador `$addToSet`

  * Utilizar os operadores `$each`, `$slice` e `$sort`

  * Utilizar o operador `$all` para filtrar documentos

  * Utilizar o operador `$elemMatch` para filtrar documentos

  * Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays

  * Utilizar o operador `$expr` para criar expressões de agregação

  * Utilizar expressões regulares e o operador `$regex` para buscar documentos

  * Utilizar o índice textual e o operador `$text`

  * Utilizar o operador `$mod`

---

## Desenvolvimento

Temos, neste projeto, uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio.

1. Leia a pergunta e crie no diretório `challenges` um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries, como no exemplo a seguir:

   ```js
   db.produtos.find();
   ```
---

### Antes de começar a desenvolver:

1. Clone o repositório
- git clone.

- Entre na pasta do repositório que você acabou de clonar.

- E Pronto você já poderá ver minhas querys!

3. Para cada exercício criei um novo arquivo JS **dentro de uma pasta na raiz do seu projeto chamada `challenges`** seguindo a seguinte estrutura:

- desafio1.js, desafio2.js, ..., desafioN.js


### Implementações técnicas

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:

```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `commerce`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `commerce` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️

---
