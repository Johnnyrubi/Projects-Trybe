const connection = require('./connection');

const users = async () => connection()
  .then((db) => db.collection('users'));

const create = async (name, email, password, role) => users()
  .then((col) => col.insertOne({ name, email, password, role }));

const findEmail = async (email) => users()
  .then((col) => col.findOne({ email }));

const findPassword = async (password) => users()
  .then((col) => col.findOne({ password }));

// const login = async (email) => users()
//   .then((col) => col.findOne({  }))

module.exports = { create, findEmail, findPassword };
