const service = require('../services/serviceVendas');

const create = async (req, res) => {
  const itensSold = req.body;
  const result = await service.create(itensSold);
  return res.status(200).json(result.ops[0]);
};

const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.status(200).json();
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await service.getById(id);
  return res.status(200).json(result);
};
 
module.exports = { create, getAll, getById };
