const route = require('express').Router();
const controller = require('../controllers/controllerProdutos');

route.post('/', controller.create);

module.exports = route;
