const model = require('../models/modelRecipe');
const utils = require('../utils/utilsRecipe');
const verificationToken = require('../utils/validationToken');

const err = ({ statusCode, message }) => ({
  statusCode,
  message,
});

const create = async ({ name, ingredients, preparation }, token) => {
  const { _id } = verificationToken(token);
  utils.validationName(name);
  utils.validationIngredients(ingredients);
  utils.validationPreparation(preparation);
  const result = await model.create(name, ingredients, preparation, _id);
  return result;
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const getById = async (id) => {
  utils.validationId(id);
  const result = await model.getById(id);
  return result;
};

const updateById = async ({ name, ingredients, preparation }, token) => {
  utils.existsToken(token);
  const { role, email } = verificationToken(token);
  const exists = await utils.findByEmail(email);
  if (role === 'admin' || exists) {
    const result = await model.updateById(name, ingredients, preparation);
    return result;
  }
  throw err({ statusCode: 401, message: 'erro em service' });
};

module.exports = { create, getAll, getById, updateById };
