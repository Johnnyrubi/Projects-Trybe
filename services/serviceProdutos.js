const produtos = require('../utils/produtos');

const create = async (name, quantity) => {
    produtos.validationName(name);
    produtos.validationQuantity(quantity);
};

module.exports = { create };
