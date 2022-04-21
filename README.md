# Boas vindas ao Projeto Cookmaster!

#  Neste projeto, você será capaz de:

- Entender o que há por dentro de um token de autenticação;

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

- Realizar testes de integração

---


## O que desenvolvi:

Uma API CRUD REST utilizando arquitetura MSC.

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, as pessoas usuárias devem poder ser clientes ou administradores. Pessoas clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação deverá ser feita via `JWT`.

adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.


## Antes de começar a desenvolver

1. Clone o repositório
  - git clone
 
 Entre na pasta do repositório que você acabou de clonar:

2. Instale as dependências.

- `npm install`

Pronto agora você pode visualizar meu projeto!


**⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️**

**👀 Observações importantes:**

 - O projeto deve rodar na porta **3000**;
 - A testagem local depende da API estar rodando (utilize `npm run dev` para facilitar o processo);

## Conexão com o Banco

**⚠️ IMPORTANTE! ⚠️**

O avaliador não consegue ler as informações que estão no local (localhost).
Portanto, para realizar a conexão com o banco, utilize os seguintes parâmetros:

```javascript
require('dotenv').config();
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';
```
Além disso, **renomeie o arquivo `.env.dev` para `.env`**.

Com essas configurações, enquanto estiver na máquina local, o banco será executado normalmente via localhost (possibilitando os testes via `npm test`).
Como o arquivo `.env` não será enviado para o GitHub (não se preocupe com isso, pois já está configurado no `.gitignore`), o avaliador não executará o banco via localhost e realizará a avaliação corretamente.

## Coleções

O banco terá duas coleções: usuários e receitas.

A coleção de usuários deverá ter o seguinte nome: `users`.

Os campos da coleção `users` terão este formato:

```json
{ "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }
```

A resposta do insert para ser retornada após a criação é esta:

```json
{ "_id" : ObjectId("5f46914677df66035f61a355"), "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }
```
(O _id será gerado automaticamente pelo mongodb)

A coleção de receitas deverá ter o seguinte nome: `recipes`.

Os campos da coleção `recipes` terão este formato:

```json
{ "name" : "Receita do Jacquin", "ingredients" : "Frango", "preparation" : "10 minutos no forno" }
```

A resposta do insert para ser retornada após a criação é esta:

```json
{ "_id" : ObjectId("5f46919477df66035f61a356"), "name" : "string", "ingredients" : "string", "preparation" : "string", "userId" : ObjectId("5f46914677df66035f61a355") }
```
(O _id será gerado automaticamente pelo mongodb, e o userId será gerado com o id do usuário que criou a receita)

---

## Testes

Todos os requisitos do projeto serão testados **automaticamente**. Cada `endpoint` possui vários requisitos e os testes para cada requisito de um `endpoint` estão no arquivo de teste correspondente.

_**Por exemplo**: Os requisitos relacionados ao `endpoint` `/users` estão no arquivo `users.test.js`._

Para executar os testes localmente, digite no terminal o comando `npm test`.

Inicialmente todos os testes falharão:

![Todos os testes falharão](./public/all-tests-fail.jpeg)

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```js
  it.skip('Será validado que o campo "email" é obrigatório', async () => {
    await frisby
      .post(`${url}/users/`,
        {
          name: 'Erick Jacquin',
          password: '12345678',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid entries. Try again.');
      });
  })
```

![Testando um arquivo específico](./public/skip-tests.jpeg)

Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test users.test.js
```

![Testando um arquivo específico](./public/running-one-test-file.jpeg)

⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

---
