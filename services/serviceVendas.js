const model = require('../models/modelServices');
const vendas = require('../utils/vendas');

const create = async (itensSold) => {
  vendas.validationId(itensSold);
  vendas.validationQuantity(itensSold);
  const result = await model.create(itensSold);
  return result;
};

module.exports = { create };
