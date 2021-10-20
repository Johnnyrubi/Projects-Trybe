const produtos = require('../utils/produtos');
const model = require('../models/modelProdutos');

const create = async (name, quantity) => {
    produtos.validationName(name);
    produtos.validationQuantity(quantity);
    const result = await model.create(name, quantity);
    return result;
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const getId = async (id) => {
  await produtos.validationId(id);
  const result = await model.getId(id);
  return result;
};

const updateById = async (name, quantity, id) => {
  await produtos.validationId(id);
  produtos.validationName(name);
  produtos.validationQuantity(quantity);
  await model.updateById(id, name, quantity);
  return ({ id, name, quantity });
};

const deleteById = async (id) => {
  await produtos.validationId(id);
  await model.deleteById(id);
};

module.exports = { create, getId, getAll, updateById, deleteById };
