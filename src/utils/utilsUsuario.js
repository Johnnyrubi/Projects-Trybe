const model = require('../models/modelUsuario');

const err = ({ statusCode, message }) => ({
  statusCode,
  message,
});

const validationCadastrationName = (name) => {
  if (!name) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

const validationCadastrationEmail = async (email) => {
  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!email) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
  if (!validEmail) {
     throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
  }
  const exists = await model.findEmail(email);
  console.log(exists);
  if (exists) throw err({ statusCode: 400, message: 'Email already registered' });
};

const validationCadastrationPassword = (password) => {
  if (!password) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

// const validationRole = (role) => {

// };

const validationtionLoginEmail = async (email) => {
  if (!email) throw err({ statusCode: 401, message: 'All fields must be filled' });
  const exists = await model.findEmail(email);
  if (!exists) throw err({ statusCode: 401, message: 'Incorrect username or password' });
  return exists.password;
};

const validationLoginPassword = async (password, exists) => {
  if (!password) throw err({ statusCode: 401, message: 'All fields must be filled' });
  if (exists !== password) throw err({ statusCode: 400, message: 'Incorret username or password' });
};

module.exports = { 
  validationCadastrationEmail, 
  validationCadastrationName, 
  validationCadastrationPassword,
  validationtionLoginEmail,
  validationLoginPassword };
