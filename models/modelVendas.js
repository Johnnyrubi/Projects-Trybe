const connection = require('./connection');

const sales = async () => connection()
  .then((db) => db.collection('sales'));

const create = async (itensSold) => sales()
  .then((prod) => prod.insertOne({ itensSold }));

module.exports = { create };
