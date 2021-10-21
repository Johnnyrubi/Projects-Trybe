const model = require('../models/modelServices');
const vendas = require('../utils/vendas');

const create = async (itens) => {
  vendas.validationId(itens);
  vendas.validationQuantity(itens);
};

module.exports = { create };
 