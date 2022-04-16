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

# Requisitos do projeto

Monte queries para encontrar as informações esperadas pelos desafios:

## Lista de Requisitos

## Desafios Iniciais

#### 1 - Exiba apenas os nomes dos produtos da tabela `products`.

#### 2 - Exiba os dados de todas as colunas da tabela `products`.

#### 3 - Escreva uma query que exiba os valores da coluna que contém a primary key da tabela `products`.

#### 4 - Conte quantos registros existem na coluna `product_name` da tabela `products`.
#### 5 - Monte uma query que exiba os dados da tabela `products` a partir do quarto registro até o décimo terceiro. Tanto o quarto quanto o décimo terceiro registros, precisam aparecer na consulta. Obs.: não use `where` ou `order by`.

#### 6 - Exiba os dados das colunas `product_name` e `id` da tabela `products` de maneira que os resultados estejam em ordem alfabética dos nomes.

#### 7 - Mostre apenas os ids dos 5 últimos registros da tabela `products` (a ordernação deve ser baseada na coluna `id`).
#### 8 - Faça uma consulta que retorne três colunas. Na primeira coluna, exiba a soma de `5 + 6` (essa soma deve ser realizada pelo SQL). Na segunda coluna deve haver a palavra \"de\". E por fim, na terceira coluna, exiba a soma de `2 + 8` (essa soma deve ser realizada pelo SQL). A primeira coluna deve se chamar \"A\", a segunda coluna deve se chamar \"Trybe\" e a terceira coluna deve se chamar \"eh\". Não use colunas pre-existentes, apenas o que for criado na hora.

---

## Desafios sobre filtragem de dados

#### 9 - Mostre todos os valores da coluna `notes` da tabela `purchase_orders` que não são nulos.

#### 10 - Mostre todos os dados da tabela `purchase_orders` em ordem decrescente, ordenados por `created_by` em que o `created_by` é maior ou igual a 3. Como critério de desempate para a ordenação, ordene também os resultados pelo `id` de forma crescente.

#### 11 - Exiba os dados da coluna `notes` da tabela `purchase_orders` em que seu valor de \"Purchase generated based on Order\" está entre 30 e 39, incluindo tanto o valor de 30 quanto de 39.

#### 12 - Mostre os resultados da coluna `submitted_date` da tabela  `purchase_orders` em que a `submitted_date` é do dia 26 de abril de 2006.

#### 13 - Mostre o resultado da coluna `supplier_id` da tabela `purchase_orders` em que o `supplier_id` seja 1 ou 3.

#### 14 - Mostre os resultados da coluna `supplier_id` da tabela `purchase_orders` em que o `supplier_id` esteja entre os valores 1 e 3, incluindo tanto o 1 quanto o 3.

#### 15 - Mostre somente as horas (sem os minutos e os segundos) da coluna `submitted_date` de todos registros da tabela `purchase_orders`. Chame essa coluna de `submitted_hour`.

#### 16 - Exiba os resultados da coluna `submitted_date` da tabela `purchase_orders` que estão entre `2006-01-26 00:00:00` e `2006-03-31 23:59:59`.

#### 17 - Mostre os registros das colunas `id` e `supplier_id` da tabela `purchase_orders` em que os `supplier_id` sejam tanto 1, ou 3, ou 5, ou 7.

#### 18 - Mostre todos os registros da tabela `purchase_orders` que tem o valor na coluna `supplier_id` igual a 3 e o valor na coluna `status_id` igual a 2.

#### 19 - Mostre a quantidade de pedidos que foram feitos na tabela `orders` pelo `employee_id` igual a 5 ou 6, e que foram enviados através do método(coluna) `shipper_id` igual a 2. Chame a coluna de `orders_count`.

---

## Desafios de manipulação de tabelas

#### 20 - Adicione à tabela `order_details` uma linha com os seguintes dados: `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129. Obs.: o `id` deve ser incrementado automaticamente.

#### 21 - Adicione, com um único `INSERT`, duas linhas à tabela `order_details` com os mesmos dados. Esses dados são novamente `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129. O `ìd` deve ser incrementado automaticamente.

#### 22 - Atualize os dados na coluna `discount` da tabela `order_details` para 15. (Não é necessário utilizar o SAFE UPDATE em sua query).

#### 23 - Atualize os dados da coluna `discount` da tabela `order_details` para 30, onde o valor na coluna `unit_price` seja menor que 10.0000. (Não é necessário utilizar o SAFE UPDATE em sua query).

#### 24 - Atualize os dados da coluna `discount` da tabela `order_details` para 45, onde o valor na coluna `unit_price` seja maior que 10.0000 e o id seja um número entre 30 a 40. (Não é necessário utilizar o SAFE UPDATE em sua query).

#### 25 - Delete todos os dados na coluna `unit_price` da tabela `order_details` em que o valor seja menor que 10.0000.

#### 26 - Delete todos os dados na coluna `unit_price` da tabela `order_details` em que o valor seja maior que 10.0000.

#### 27 - Delete todos os dados da tabela `order_details`.

---
