const service = require('../services/serviceVendas');

const create = async (req, res) => {
    const { name, quantity } = req.body;
    const result = await service.create(name, quantity);
    return res.status(201).json(result.ops[0]);
};

const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.status(200).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const result = await service.getId(id);
  return res.status(200).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const result = await service.updateById(name, quantity, id);
  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await service.deleteById(id);
  return res.status(200).json({ message: 'deletado' });
};

module.exports = { create, getId, getAll, updateById, deleteById };
