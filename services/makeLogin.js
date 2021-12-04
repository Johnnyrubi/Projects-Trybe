const validator = require('../utils');

const makelogin = async ({ email, password }) => {
  const token = await validator.validationLogin(email, password);
  return token;
};

module.exports = {
  makelogin,
};