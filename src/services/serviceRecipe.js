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
  return result.ops[0];
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const getById = async (id) => {
  await utils.validationId(id);
  const result = await model.getById(id);
  return result;
};

const updateById = async ({ name, ingredients, preparation }, token, id) => {
  utils.existsToken(token);
  const { _id, role } = verificationToken(token);
  const exists = await utils.findById(_id, id);
  if (role === 'admin' || exists) {
    await model.updateById(name, ingredients, preparation, id);
    return ({
      _id: id,
      name,
      ingredients,
      preparation,
      userId: _id,
    });
  }
  throw err({ statusCode: 401, message: 'erro em service' });
};

const deleteById = async (id, token) => {
  utils.existsToken(token);
  const { _id, role } = verificationToken(token);
  const exists = await utils.findById(_id, id);
  if (role === 'admin' || exists) {
    await model.deleteById(id);
  }
  throw err({ statusCode: 401, message: 'erro em service' });
};

module.exports = { create, getAll, getById, updateById, deleteById };
