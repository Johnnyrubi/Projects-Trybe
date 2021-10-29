const jwt = require('jsonwebtoken');

const secret = 'seila123';
const configJWT = { expiresIn: '1d', algorithm: 'HS256' };

const creationToken = ({ _id, email, role }) => {
  const result = jwt.sign({ _id, email, role }, secret, configJWT);
  return result;
  };

module.exports = creationToken;
