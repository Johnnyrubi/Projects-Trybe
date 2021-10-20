const { ObjectId } = require('mongodb');
const { getId } = require('../models/modelProdutos');

const err = ({ status, message }) => ({
  status,
  err: {
    code: 'invalid_data',
    message,
  },
});

const validationName = (name) => {
  const minimumLength = 5;
  if (typeof name !== 'string') throw err({ status: 422, message: '"name" must be a string' });
  if (name.length < minimumLength) {
    throw err({ status: 422, message: '"name" length must be at least 5 characters long' });
  }
};

const validationQuantity = (quantity) => {
  if (typeof quantity !== 'number') { 
    throw err({ status: 422, message: '"quantity" must be a number' });
  }
  if (quantity < 1) {
    throw err({ status: 422, message: '"quantity" must be larger than or equal to 1' });
  }
};

const validationId = async (id) => {
  if (!ObjectId.isValid(id)) {
     throw err({ status: 422, message: '"Wrong id format"' });
  }
  
  const exists = await getId(id);
  if (!exists) throw err({ status: 422, message: '"Id" not exists' });
};

module.exports = { validationName, validationId, validationQuantity };
