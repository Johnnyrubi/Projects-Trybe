const service = require('../services/serviceVendas');

const create = async (req, res) => {
  const itens = req.body;
  service.create(itens);
  return res.status().json();
}