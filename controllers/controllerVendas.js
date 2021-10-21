const service = require('../services/serviceVendas');

const create = async (req, res) => {
  const itens = req.body;
  await service.create(itens);
  return res.status().json();
};

module.exports = { create };
