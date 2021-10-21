const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerVendas');

route.post('/', rescue(controller.create));

route.get('/:id', rescue(controller.getById));

route.get('/', rescue(controller.getAll));

module.exports = route;
