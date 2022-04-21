Bem vindo ao meu Projeto Mysql All for One


Nesse projeto, Aprendi e coloquei em pratica:

- Entendi o que são bancos de dados
- Entendi como a linguagem de consulta estruturada (SQL) é usada
- Compreendi como as tabelas se encaixam no conceito de banco de dados
- Montei um ambiente de desenvolvimento local para praticar SQL
- Entendi como usar o MySQL Workbench
- Compreendi o que é uma query SQL e quais são seus tipos de comando
- Gerei valores com `SELECT`
- Selecionei colunas individualmente com `SELECT`
- Renomeie e gerar colunas em uma consulta com `AS`
- Concatenei colunas e valores com `CONCAT`
- Removi dados duplicados em uma consulta com `DISTINCT`
- Contei a quantidade de resultados em uma consulta com `COUNT`
- Limitei a quantidade de resultados em uma consulta com `LIMIT`
- Pulei resultados em uma consulta com `OFFSET`
- Ordenei os resultados de uma consulta com `ORDER BY`
- Filtrar resultados de consultas com o `WHERE`
- Utilizar operadores booleanos e relacionais em consultas
- Criar consultas mais dinâmicas e maleáveis com `LIKE`
- Fazer consultas que englobam uma faixa de resultados com `IN` e `BETWEEN`
- Encontrei e separei resultados que incluem datas.
- Inseri dados em tabelas com `INSERT`
- Atualizei dados em tabelas com `UPDATE`
- Apaguei dados em tabelas com `DELETE`

---

Você pode ter acesso a este Projeto do seguinte modo:
* Clone o repositório

Entre na pasta do repositório que você acabou de clonar

Instale as dependências:

* npm install

Agora Você está no meu projeto e poderá ver minhas querys MYSQL
Para cada Desafio eu fiz um arquivo sql com o numero correspondente ao desafio.
---

## Instruções para restaurar o banco de dados `Northwind`

1. Faça o download do arquivo de backup [aqui](northwind.sql) clicando em "Raw", depois clicando com botão direito e selecionando "Salvar como" para salvar o arquivo em seu computador.
2. Abra o arquivo com algum editor de texto, e selecione todo o conteúdo do arquivo usando `CTRL-A`.
3. Abra o MySQL Workbench.
4. Abra uma nova janela de query e cole dentro dela todo o conteúdo do arquivo `northwind.sql`.
5. Selecione todo o código com o atalho `CTRL-A` e depois clique no icone de trovão para executar a query.

    ![Restaurando o banco Northwind](images/restore_northwind.png)
6. Aguarde alguns segundos (espere em torno de 30 segundos antes de tentar fazer algo).
7. Clique no botão apontado na imagem a seguir para atualizar a listagem de banco de dados.

    ![Tabelas do banco Northwind](images/refresh_databases.png)
7. Verifique se o banco restaurado possui todas as seguintes tabelas:

    ![Tabelas do banco Northwind](images/northwind.png)
8. Clique com botão direito em cada tabela e selecione "Select Rows" e certifique-se que todas as tabelas possuem registros. Caso tenha alguma faltando, faça o passo a seguir. Caso contrário, pode ir para próxima seção.
9. Caso existam tabelas faltando, drope o banco de dados, clicando com o botão direito em cima do banco de dados northwind e selecionando "Drop Schema", e refaça os passos novamente, dessa vez aguardando um tempo maior quando executar o script de restauração.

    ![Drop Schema](images/drop_database.png)

---

## Instruções para testar suas queries

Para executar localmente os testes, é preciso escrever o seguinte comando no seu terminal:
```sh
MYSQL_USER=<SEU_NOME_DE_PESSOA_USUARIA> MYSQL_PASSWORD=<SUA SENHA> HOSTNAME=<NOME_DO_HOST> npm test
```

Ou seja, suponha que para poder acessar a base de dados feita neste projeto você tenha `root` como seu nome de pessoa usuária, `password` como senha e `localhost` como host. Logo, você executaria:
```sh
MYSQL_USER=root MYSQL_PASSWORD=password HOSTNAME=localhost npm test
```

Usando o exemplo anterior de base, suponha que você não tenha setado uma senha para `root`. Neste caso, você executaria:
```sh
MYSQL_USER=root MYSQL_PASSWORD= HOSTNAME=localhost npm test
  ```
---

:warning: **Não é necessário colocar** `USE northwind` ou `SET SQL_SAFE_UPDATES = 0;` no início dos seus arquivos :warning:

---
