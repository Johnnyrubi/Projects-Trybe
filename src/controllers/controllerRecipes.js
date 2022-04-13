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
  const { id } = req.params;
  const result = await service.getById(id);
  return res.status(200).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const result = await service.updateById(req.body, token, id);
  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  await service.deleteById(token, id);
  return res.status(204).json();
};

const createImage = async (req, res) => {
  const { path } = req.file;
  const { id } = req.params;
  const token = req.headers.authorization;
  const result = await service.createImage(token, id, path);
  return res.status(200).json(result);
};

module.exports = { create, getAll, getById, updateById, deleteById, createImage };
