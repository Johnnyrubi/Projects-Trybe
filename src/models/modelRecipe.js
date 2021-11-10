const { ObjectId } = require('mongodb');
const connection = require('./connection');

const recipes = async () => connection()
  .then((db) => db.collection('recipes'));

const create = async (name, ingredients, preparation, userId) => recipes()
  .then((col) => col.insertOne({ name, ingredients, preparation, userId }));

const getAll = async () => recipes()
  .then((col) => col.find().toArray());

const getById = async (id) => recipes()
  .then((col) => col.findOne({ _id: ObjectId(id) }));

const findById = async (userId, recipeId) => recipes()
  .then((col) => col.findOne({ userId, _id: ObjectId(recipeId) }));

const updateById = async (name, ingredients, preparation, id) => recipes()
  .then((col) => col.updateOne({ _id: ObjectId(id) },
  { $set: { name, ingredients, preparation } }));

const deleteById = async (id) => recipes()
  .then((col) => col.deleteOne({ _id: ObjectId(id) }));

module.exports = { create, getAll, getById, findById, updateById, deleteById };
