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
  if (exists) throw err({ statusCode: 409, message: 'Email already registered' });
};

const validationCadastrationPassword = (password) => {
  if (!password) throw err({ statusCode: 400, message: 'Invalid entries. Try again.' });
};

const validationEmail = (email) => {
  if (!email) throw err({ statusCode: 401, message: 'All fields must be filled' });
};

const validationPassword = (password) => {
  if (!password) throw err({ statusCode: 401, message: 'All fields must be filled' });
};

const validationEmailExist = async (email, password) => {
  const response = await model.findEmail(email);
  if (!response) throw err({ statusCode: 401, message: 'Incorrect username or password' });

  if (response.password !== password) {
    throw err({ statusCode: 400, message: 'Incorrect username or password' });
  }
};

const validationLogin = async (email, password) => {
  validationEmail(email);
  validationPassword(password);
  await validationEmailExist(email, password);
};

module.exports = { 
  validationCadastrationEmail, 
  validationCadastrationName, 
  validationCadastrationPassword,
  validationLogin,
};
