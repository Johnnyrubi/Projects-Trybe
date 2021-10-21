const { ObjectId } = require('mongodb');
const connection = require('./connection');

const sales = async () => connection()
  .then((db) => db.collection('sales'));

const create = async (itensSold) => sales()
  .then((prod) => prod.insertOne({ itensSold }));

const getAll = async () => sales()
  .then((prod) => prod.find().toArray());

const getById = async (id) => sales()
  .then((prod) => prod.findOne(ObjectId(id)));

module.exports = { create, getById, getAll };
