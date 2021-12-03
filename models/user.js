module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
  { displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.String,
  }, { timestaps: false });
  return User;
};
