const { BlogPost, Category, User } = require('../models');

const err = (statusCode) => ({ statusCode });

const validationTitle = (title) => {
  if (!title) throw err({ statusCode: 400, message: '"title" is required' });
};

const validationContent = (content) => {
  if (!content) throw err({ statusCode: 400, message: '"content" is required' });
};

const valdiationCategoryIds = (categoryIds) => {
  if (!categoryIds) throw err({ statusCode: 400, message: '"categoryIds" is required' });
};

const getById = async (id) => {
  const result = await BlogPost.findOne({ where: { id }, 
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
    if (!result) throw err({ statusCode: 404, message: 'Post does not exist' });
    return result;
};

const verificationUserPost = async (userId, id) => {
  const findUser = await BlogPost.findOne({ where: { userId, id } });
  if (!findUser) throw err({ statusCode: 401, message: 'Unauthorized user' });
};

const validationBodyUpdate = ({ title, content, categoryIds }) => {
  if (!title) throw err({ statusCode: 400, message: '"title" is required' });
  if (!content) throw err({ statusCode: 400, message: '"content" is required' });
  if (categoryIds) throw err({ statusCode: 400, message: 'Categories cannot be edited' });
};

const ifPostExists = async (id) => {
  const search = await BlogPost.findOne({ where: { id } });
  if (!search) throw err({ statusCode: 404, message: 'Post does not exist' });
};

const ifCategoryIdExists = async (categoryIds) => {
  const search = await Category.findAll({ where: { id: categoryIds } });
  if (search.length !== categoryIds.length) {
    throw err({ statusCode: 400, message: '"categoryIds" not found' });
  }
};

const updatePost = async (userId, id, body) => {
  validationBodyUpdate(body);
  await verificationUserPost(userId, id);
};

const deletePost = async (userId, id) => {
  await ifPostExists(id);
  await verificationUserPost(userId, id);
};

const validationPost = async (title, content, categoryIds) => {
  validationTitle(title);
  valdiationCategoryIds(categoryIds);
  validationContent(content);
  await ifCategoryIdExists(categoryIds);
};

module.exports = {
  validationPost,
  getById,
  updatePost,
  deletePost,
};
