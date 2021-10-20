const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerProdutos');

route.post('/', rescue(controller.create));

route.get('/:id', rescue(controller.getId));

route.get('/', rescue(controller.getAll));

route.put('/:id', rescue(controller.update));

route.delete('/:id', rescue(controller.deleteById));

module.exports = route;
