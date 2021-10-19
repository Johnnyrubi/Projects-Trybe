const { ObjectId } = require('mongodb');
const connection = require('./connection');

const products = async () => connection()
  .then((db) => db.collection('products'));

const create = async (name, quantity) => products()
  .then((prod) => prod.insertOne({ name, quantity }));

const getId = async (id) => products()
  .then((prod) => prod.findOne(ObjectId(id)));

module.exports = { create, getId };
