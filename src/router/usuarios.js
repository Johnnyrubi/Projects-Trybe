const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/');

route.post('/', rescue(controller.create));

module.exports = route;
