const { ObjectId } = require('mongodb');
const connection = require('./connection');

const recipes = async () => connection()
  .then((db) => db.collection('recipes'));

const create = async (name, ingredients, preparation, userId) => recipes()
  .then((col) => col.insertOne({ name, ingredients, preparation, userId }));

const getAll = async () => recipes()
  .then((col) => col.find().toArray());

const getById = async (id) => recipes()
  .then((col) => col.findOne(ObjectId(id)));

const findByEmail = async (email) => recipes()
  .then((col) => col.findOne(email));

const updateById = async (name, ingredients, preparation, id) => recipes()
  .then((col) => col.)

module.exports = { create, getAll, getById, findByEmail };
