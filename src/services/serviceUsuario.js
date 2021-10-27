const model = require('../models/modelUsuarios');
const utils = require('../utils/utilsUsuario');

const create = async (name, password, email, role) => {
  utils.validationName(name);
  utils.validationPassword(password);
  utils.validationEmail(email);
  utils.validationRole(role);
  const result = await model.create(name, email, password, role);
  return result;
}

module.exports = {create};
