const products = require('../models/modelProdutos');

const err = ({ message }) => ({
  status: 422,
  err: {
    code: 'invalid_data',
    message,
  },
});

const validationId = async (itens) => {
  const prod = await products.getAll();
  const result = itens.every(({ productId }) =>
    prod.some(({ _id }) => productId === _id.toString()));
  if (!result) throw err({ message: 'Wrong product ID or invalid quantity' });
};

const validationQuantity = (itens) => {
  const total = itens.every(({ quantity }) =>
    (typeof quantity === 'number') && (quantity > 0));
  if (!total) throw err({ message: 'Wrong product ID or invalid quantity' });
};

module.exports = { validationId, validationQuantity };
