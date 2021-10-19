const service = require('../services/serviceProdutos');

const create = async (req, res) => {
    const { name, quantity } = req.body;
    const result = await service.create(name, quantity);
    console.log(result);
    return res.status(201).json(result.ops[0]);
};

module.exports = { create };
