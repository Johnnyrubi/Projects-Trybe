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
  await utils.validationIdByVendas(id);
  const result = await model.getById(id);
  return result;
};

module.exports = { create, getById, getAll };
