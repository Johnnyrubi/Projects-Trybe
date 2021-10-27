const service = require('../services/serviceUsuario')

const create = async = (req, res) => {
//   const { name, email, password}
//  = req.body;
const result = await service.create(req.body);
return res.status(201).json(result);
}; 

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await service.login(req.body);
  return res.status(200).json(result);
}

module.exports = { create, login };
