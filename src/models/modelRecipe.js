const connection = require('./connection');

const recipes = async () => connection()
  .then((db) => db.collection('recipes'));

const create = async (name, ingredients, preparation, id) => recipes()
  .then((col) => col.insertOne({ name, ingredients, preparation, id }));

const getAll = async () => recipes()
  .then((col) => col.find());

module.exports = { create, getAll };
