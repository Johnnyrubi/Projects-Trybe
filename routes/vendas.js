const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerProdutos');

route.post('/', rescue(controller.create))