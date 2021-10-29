const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerRecipes');

route.post('/recipes', rescue(controller.cadastrationRecipes));

module.exports = route;
