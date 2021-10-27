const connection = require('./connection');

const users = async () => connection()
  .then((db) => db.collection('users'));

const create = async (name, password, email, role) => users()
  .then((col) => col.insertOne({ name, password, email, role  }));

const findEmail = async (email) => users()
  .then((col) => col.findOne({ email }));

module.exports = { create, findEmail };
