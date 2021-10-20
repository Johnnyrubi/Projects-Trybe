const service = require('../services/serviceProdutos');

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

module.exports = { create, getId, getAll };
