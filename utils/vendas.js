const { ObjectId } = require('mongodb');
const products = require('../models/modelProdutos');
const sales = require('../models/modelVendas');

const err = ({ code = 'invalid_data', status, message }) => ({
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
  if (!result) throw err({ status: 422, message: 'Wrong product ID or invalid quantity' });
};

const validationQuantity = (itens) => {
  const total = itens.every(({ quantity }) =>
    (typeof quantity === 'number') && (quantity > 0));
  if (!total) throw err({ status: 422, message: 'Wrong product ID or invalid quantity' });
};

const updateById = (quantity) => {
  if (typeof quantity !== 'number' || quantity <= 0) {
    throw err({ status: 422, message: 'Wrong product ID or invalid quantity' });
  }
};

const verificationId = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw err({ code: 'not_found', status: 404, message: 'Sale not found' });
 }
  const verification = await sales.getById(id);
  if (!verification) throw err({ code: 'not_found', status: 404, message: 'Sale not found' });
};

const verificationIdForDelete = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw err({ status: 422, message: 'Wrong sale ID format' });
 }
  const verification = await sales.getById(id);
  if (!verification) throw err({ code: 'not_found', status: 422, message: 'Sale not found' });
};

module.exports = { 
  validationIdByProdutos, 
  validationQuantity, 
  updateById, 
  verificationId,
  verificationIdForDelete,
};
