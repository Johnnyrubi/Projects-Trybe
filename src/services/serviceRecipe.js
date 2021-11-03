const model = require('../models/modelRecipe');
const utils = require('../utils/utilsRecipe');
const verificationToken = require('../utils/validationToken');

const create = async ({ name, ingredients, preparation, token }) => {
  const id = verificationToken(token);
  utils.validationName(name);
  utils.validationIngredients(ingredients);
  utils.validationPreparation(preparation);
  const result = await model.create(name, ingredients, preparation, id);
  return result;
};

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

module.exports = { create, getAll };
