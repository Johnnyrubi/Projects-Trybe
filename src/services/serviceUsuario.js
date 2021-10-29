const model = require('../models/modelUsuario');
const utils = require('../utils/utilsUsuario');

const create = async ({ name, email, password, role = 'user' }) => {
  utils.validationCadastrationName(name);
  await utils.validationCadastrationEmail(email);
  utils.validationCadastrationPassword(password);
  const result = await model.create(name, email, password, role);
  return result;
};

const login = async (email, password) => {
  const exists = await utils.validationtionLoginEmail(email);
  await utils.validationLoginPassword(password, exists);
  const result = await model.findEmail(email);
  return result;
};

module.exports = { create, login };
