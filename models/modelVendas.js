const { ObjectId } = require('mongodb');
const connection = require('./connection');

const sales = async () => connection()
  .then((db) => db.collection('sales'));

const create = async (itensSold) => sales()
  .then((db) => db.insertOne({ itensSold }));

const getAll = async () => sales()
  .then((db) => db.find().toArray());

const getById = async (id) => sales()
  .then((db) => db.findOne(ObjectId(id)));

const updateById = async (id, quantity, productId) => sales()
  .then((db) => db.updateOne({ _id: ObjectId(id) }, { $set: { quantity, productId } }));

module.exports = { create, getById, getAll, updateById};
