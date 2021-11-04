const connection = require('./connection');

const recipes = async () => connection()
  .then((db) => db.collection('recipes'));

const create = async (name, ingredients, preparation, id) => recipes()
  .then((col) => col.insertOne({ name, ingredients, preparation, id }));

const getAll = async () => recipes()
  .then((col) => col.find().toArray());

const getById = async (id) => recipes()
  .then((col) => col.findOne(id));

const findByEmail = async (email) => recipes()
  .then((col) => col.findOne(email));

module.exports = { create, getAll, getById, findByEmail };
