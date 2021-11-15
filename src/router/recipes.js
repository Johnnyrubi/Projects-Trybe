const route = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerRecipes');
const upload = require('../middlewares/multer');

route.post('/recipes', rescue(controller.create));

route.get('/recipes', rescue(controller.getAll));

route.get('/recipes/:id', rescue(controller.getById));

route.put('/recipes/:id', rescue(controller.updateById));

route.delete('/recipes/:id', rescue(controller.deleteById));

route.post('/recipes/:id/image/', upload, rescue(controller.createImage));

module.exports = route;
