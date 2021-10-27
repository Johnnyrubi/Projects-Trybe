const service = require('../services/serviceUsuario')

const create = async = (req, res) => {
  const { name, email, password, role }
 = req.body;
const result = await service.create(name,  email, password, role);
return res.status(201).json(result);
}; 

module.exports = {create};
