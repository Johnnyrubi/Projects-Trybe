const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerRecipes');

route.post('/', rescue(controller.login));

module.exports = route;
