const model = require('../models/modelVendas');
const utils = require('../utils/vendas');

const create = async (itensSold) => {
  await utils.validationIdByProdutos(itensSold);
  utils.validationQuantity(itensSold);
  const result = await model.create(itensSold);
  return result;
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const getById = async (id) => {
  await utils.validationIdByProdutos(id);
  const result = await model.getById(id);
  return result;
};

const updateById = async (id, quantity, productId) => {
  utils.updateById(quantity);
  const result = await model.updateById(id, quantity, productId);
  return result;
};

const deleteById = async (id) => {
  await model.deleteById(id);
  const result = await model.getById(id);
  return result;
};

module.exports = { create, getById, getAll, updateById, deleteById };
