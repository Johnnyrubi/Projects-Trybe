const express = require('express');
const produtos = require('./routes/produtos');
const vendas = require('./routes/vendas');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/sales', vendas);

app.use('/products', produtos);

app.use((erro, _res, res, _next) => {
  if (erro.status) {
    const { status, err } = erro;
    res.status(status).json({ err });
  }
  res.status(500).json(erro);
});

app.listen(PORT);
