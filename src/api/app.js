const express = require('express');
const usuarios = require('../router/usuarios');
const receitas = require('../router/recipes');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/', usuarios);

app.use('/', receitas);

app.use((err, _req, res, _next) => {
  if (err.statusCode) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ err });
});

module.exports = app;
