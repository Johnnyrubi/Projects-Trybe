const { ObjectId } = require('mongodb');
const model = require('../models/modelRecipe');

const err = ({ statusCode, message }) => ({
  statusCode,
  message,
});

const validationName = (name) => {
  if (!name) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

const validationPreparation = (preparation) => {
  if (!preparation) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

const validationIngredients = (ingredients) => {
  if (!ingredients) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

const validationId = async (id) => {
  if (!ObjectId.isValid(id)) throw err({ statusCode: 404, message: 'recipe not found' });
  const exists = await model.getById(id);
  if (!exists) throw err({ statusCode: 404, message: 'recipe not found' });
};

const existsToken = (token) => {
  if (!token) throw err({ statusCode: 401, message: 'missing auth token' });
};

const findById = async (userId, recipeId) => {
  const exists = await model.findById(userId, recipeId);
  return exists;
};

module.exports = {
  validationIngredients,
  validationPreparation,
  validationName,
  validationId,
  existsToken,
  findById,
};
