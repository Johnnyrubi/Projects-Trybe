const { ObjectId } = require('mongodb');
const products = require('../models/modelProdutos');
const sales = require('../models/modelVendas');

const err = ({ code = 'invalid_data', status = 422, message }) => ({
  status,
  err: {
    code,
    message,
  },
});

const validationIdByProdutos = async (itens) => {
  const prod = await products.getAll();
  const result = itens.every(({ productId }) =>
    prod.some(({ _id }) => productId === _id.toString()));
  if (!result) throw err({ message: 'Wrong product ID or invalid quantity' });
};

const validationIdByVendas = async (id) => {
  // if (!ObjectId.isValid(id)) {
  //   throw err({ status: 422, message: '"Wrong id format"' });
//  }
  const verification = await sales.getById(id);
  console.log(verification);
  if (!verification) throw err({ code: 'not_found', status: 404, message: 'Sale not Found' });
};

const validationQuantity = (itens) => {
  const total = itens.every(({ quantity }) =>
    (typeof quantity === 'number') && (quantity > 0));
  if (!total) throw err({ message: 'Wrong product ID or invalid quantity' });
};

module.exports = { validationIdByProdutos, validationQuantity, validationIdByVendas };
