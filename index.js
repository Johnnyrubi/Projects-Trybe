const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';



// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
