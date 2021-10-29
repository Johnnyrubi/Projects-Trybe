const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerUsuarios');

route.post('/users', rescue(controller.create));

route.post('/login', rescue(controller.login));

module.exports = route;
