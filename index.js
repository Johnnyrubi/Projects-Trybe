const express = require('express');
const produtos = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', produtos);

app.listen(PORT);
