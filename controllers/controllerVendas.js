const service = require('../services/serviceVendas');

const create = async (req, res) => {
  const itensSold = req.body;
  const result = await service.create(itensSold);
  return res.status(200).json(result.ops[0]);
};

module.exports = { create };
