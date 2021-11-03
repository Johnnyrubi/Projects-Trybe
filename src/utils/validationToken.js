const jwt = require('jsonwebtoken');

const secret = 'seila123';

const err = (statusCode) => ({ statusCode });

const verificationToken = (token) => {
  if (!token) throw err({ status: 400, message: 'jwt não existe' });
  try {
    const { _id } = jwt.verify(token, secret);
    return _id;
  } catch (erro) {
    throw err({ status: 401, message: 'jwt malformed' });
  }
};

module.exports = verificationToken;
