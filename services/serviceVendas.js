const model = require('../models/modelVendas');
const utils = require('../utils/vendas');

const create = async (itensSold) => {
  await utils.validationId(itensSold);
  utils.validationQuantity(itensSold);
  const result = await model.create(itensSold);
  return result;
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const getById = async (id) => {
  const utils.
}
module.exports = { create };
