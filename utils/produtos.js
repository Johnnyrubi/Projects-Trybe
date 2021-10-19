const { ObjectId } = require('mongodb');


const err = ({ message }) => ({
  err: {
    code: 'invalid_data',
    message,
  },
});


const validationName = (name) => {
  const minimumLength = 5;
  if (typeof name !== 'string') throw err({ message: '"name" must be a string' });
  if (name.length < minimumLength) {
    throw err({ message: '"name" length must be at least 5 characters long' });
  }
};

const validationQuantity = (quantity) => {
  if (typeof quantity !== 'number') throw err({ message: '"quantity" must be a number' });
  if (quantity < 1) throw err({ message: '"quantity" must be larger than or equal to 1' });
};

const validationId = (id) => {
  const exists = await getById(id)
  if (!exists) throw err({ message: '"Id" not exists'});
  if (!ObjectId.isValid(id)) throw err({ message: '"Wrong id format"' });
};

module.exports = { validationName, validationId, validationQuantity };
