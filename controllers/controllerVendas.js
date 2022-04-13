const service = require('../services/serviceVendas');

const create = async (req, res) => {
  const itensSold = req.body;
  const result = await service.create(itensSold);
  return res.status(200).json(result.ops[0]);
};

const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.status(200).json({ sales: result });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await service.getById(id);
  return res.status(200).json({ sales: result });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { quantity, productId } = req.body[0];
  const itensSold = req.body;
  await service.updateById(id, quantity, productId);
  return res.status(200).json({ _id: id, itensSold });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await service.deleteById(id);
  return res.status(200).json();
};
 
module.exports = { create, getAll, getById, updateById, deleteById };
