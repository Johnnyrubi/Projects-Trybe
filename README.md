Boas vindas ao meu projeto Data Flights

Neste Projeto irei:

- Buscar documentos no banco
- Usar filtros na busca
- Deletar documentos conforme filtro
- Contar documentos compreendidos nos filtros pedidos
- Inserir documentos no banco
- Consultar a coleção do projeto, usando vários campos para filtrar essa busca, 
- Deletar alguns voos conforme outros filtros.
- Contar voos compreendidos nos filtros.
---

Você pode ter acesso a este Projeto do seguinte modo:

* Clone o repositório

Entre na pasta do repositório que você acabou de clonar

Instale as dependências:

* npm install

Pronto você já está preparado para ver minhas querys!

 Para cada exercício criei um novo arquivo JS **dentro de uma pasta na raiz do meu projeto chamada `challenges`** seguindo a seguindo a estrutura:
  * desafio1.js, desafio2.js, ..., desafioN.js

### Como rodar os testes:

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `dataFlights`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```
