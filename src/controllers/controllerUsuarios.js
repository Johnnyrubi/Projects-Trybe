const service = require('../services/serviceUsuario');
const criationToken = require('../utils/generateToken');

const create = async (req, res) => {
  // const { name, email, password } = req.body;
  const result = await service.create(req.body);
  return res.status(201).json(result.ops[0]);
}; 

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await service.login(email, password);
  const token = criationToken(result);
  return res.status(200).json({ token });
};

module.exports = { create, login };
