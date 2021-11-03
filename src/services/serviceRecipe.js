const model = require('../models/modelRecipe');
const utils = require('../utils/utilsRecipe');

const create = async ({ name, ingredients, preparation }) => {
  utils.validationName(name);
  utils.validationIngredients(ingredients);
  utils.validationPreparation(preparation);
  const result = await model.create(name, ingredients, preparation);
  return result;
};

module.exports = { create };
