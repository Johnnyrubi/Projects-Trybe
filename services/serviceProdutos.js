const produtos = require('../utils/produtos');

const create = async (name, quantity) => {
  try {
    produtos.validationName(name);
    produtos.validationQuantity(quantity);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create };
