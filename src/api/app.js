const express = require('express');
const erro = require('../middlewares/erro');
const usuarios = require('../router/usuarios');
const receitas = require('../router/recipes');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

// route.post('/recipes/:id/image/', rescue(controller.createImage));

app.use('/', usuarios);

app.use('/', receitas);

app.use(erro);

module.exports = app;
