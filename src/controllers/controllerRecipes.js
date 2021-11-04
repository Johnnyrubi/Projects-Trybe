const service = require('../services/serviceRecipe');

const create = async (req, res) => {
// const { name, ingredients, preparation } = req.body;
  const token = req.headers.authorization;
  const recipe = await service.create(req.body, token);
  return res.status(201).json({ recipe });
};

const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const id = req.body;
  const result = await service.getById(id);
  return res.status(200).json(result);
};

const updateById = async (req, res) => {
  const token = req.headers.authorization;
  const result = await service.updateById(req.body, token);
  return res.status(201).json(result);
};

module.exports = { create, getAll, getById, updateById };
