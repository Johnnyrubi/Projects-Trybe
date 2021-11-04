const model = require('../models/modelUsuario');
const utils = require('../utils/utilsUsuario');

const create = async ({ name, email, password, role = 'user' }) => {
  await utils.validationCadastrationName(name);
  await utils.validationCadastrationEmail(email);
  await utils.validationCadastrationPassword(password);
  const result = await model.create(name, email, password, role);
  return result.ops[0];
};

const login = async (email, password) => {
  const exists = await utils.validationtionLoginEmail(email);
  await utils.validationLoginPassword(password, exists);
  const result = await model.findEmail(email);
  return result;
};

module.exports = { create, login };
