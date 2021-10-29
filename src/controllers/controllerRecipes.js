const service = require('../services/serviceRecipe');

const cadastrationRecipes = async (req, res) => {
// const { name, ingredients, preparation } = req.body;
service.createRecipes(req.body);
return res.status(201).json({})

};

module.exports = { cadastrationRecipes };
