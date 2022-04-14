const { BlogPost, User, Category } = require('../models');
const requireToken = require('../utils/validationToken');
const utilsPost = require('../utils/validationPost');
// const utils = require('../utils/validationCategories');

const createPost = async (token, { title, content, categoryIds }) => {
  const { id } = requireToken.validationToken(token);
  await utilsPost.validationPost(title, content, categoryIds);
  
  const result = await BlogPost.create({ userId: id, title, content, categoryIds })
    .then((post) => {
      post.addCategory(categoryIds);
      return ({ id: post.id, userId: post.userId, title: post.title, content: post.content });
    });
  return result;
};

const getAll = async (token) => {
  requireToken.validationToken(token);
  const result = await 
  BlogPost.findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }] });
  return result;
};

const getById = async (token, id) => {
  requireToken.validationToken(token);
  const result = await utilsPost.getById(id);
  return result;
};

const updatePost = async (token, id, body) => {
  const payload = requireToken.validationToken(token);
  const idUser = payload.id;
  await utilsPost.updatePost(idUser, id, body);
  await BlogPost.update(body, { where: { id } });
  const result = await BlogPost.findOne({ where: { id }, 
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }] });
  console.log(result);
  return result;
};

const deletePost = async (token, id) => {
  const payload = requireToken.validationToken(token);
  const idUser = payload.id;
  await utilsPost.deletePost(idUser, id);
  await BlogPost.destroy({ where: { id } });  
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
};
