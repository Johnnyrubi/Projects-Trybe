const model = require('../models/modelUsuario');

const err = ({});


const validationCadastrationName = (name) => {
  if(!name) throw err({ status: 400, message: "Invalid entries. Try again." });
};

const validationCadastrationEmail = async (email) => {
  if (!email) throw err({ status: 400, message: "Invalid entries. Try again." });
  const exists = await model.findEmail(email);
  if (exists) throw err ({status: 400, message: "Email already registeredm" });
};

const validationCadastrationPassword = (password) => {
  if(!password) throw err({ status: 400, message: "Invalid entries. Try again."});
};

// const validationRole = (role) => {

// };

const validationtionLoginEmail = (email) => {

}

const validationLoginPassword = (password) => {
  
}

module.exports = { 
  validationCadastrationEmail, 
  validationCadastrationName, 
  validationCadastrationPassword,
  validationtionLoginEmail,
  validationLoginPassword };
