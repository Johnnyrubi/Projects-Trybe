const express = require('express');
const usuarios = require('../router/usuarios');

const app = express();

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/', usuarios);

app.use('/', usuarios);

module.exports = app;
