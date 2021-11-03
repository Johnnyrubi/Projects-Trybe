const model = require('../models/modelRecipe');

const err = ({ statusCode, message }) => ({
  statusCode,
  message,
});

const validationName = (name) => {
  if (!name) throw err({ statusCode: 400, message: 'Invalid entries, Try again' });
};

const validationPreparation = (preparation) => {
  if (!preparation) throw err({ statusCode: 400, message: 'Invalid entries, Try again' });

};

const validationIngredients = (ingredients) => {
  if (!ingredients) throw err({ statusCode: 400, message: 'Invalid entries, Try again' });
};

const validationId = async (id) => {
  const exists = await model.getById(id);
  if (!exists) throw err({ statusCode: 400, message: 'recipe not found' });
  return exists;
};

module.exports = {
  validationIngredients,
  validationPreparation,
  validationName,
  validationId,
};
