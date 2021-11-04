const service = require('../services/serviceUsuario');
const criationToken = require('../utils/generateToken');

const create = async (req, res) => {
  // const { name, email, password } = req.body;
  const user = await service.create(req.body);
  delete user.password;
  return res.status(201).json({ user });
}; 

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await service.login(email, password);
  const token = criationToken(result);
  return res.status(200).json({ token });
};

module.exports = { create, login };
