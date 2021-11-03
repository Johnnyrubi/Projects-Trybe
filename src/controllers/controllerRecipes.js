const service = require('../services/serviceRecipe');

const create = async (req, res) => {
// const { name, ingredients, preparation } = req.body;
  const token = req.headers.authorization;
  const result = service.create(req.body, token);
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const result = service.getAll();
  return res.status(200).json(result);
};

module.exports = { create, getAll };
