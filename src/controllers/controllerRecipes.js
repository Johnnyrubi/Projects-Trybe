const service = require('../services/serviceRecipe');

const create = async (req, res) => {
// const { name, ingredients, preparation } = req.body;
  const result = service.create(req.body);
  return res.status(201).json(result);

};

module.exports = { create };
