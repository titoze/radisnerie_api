'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    additional_address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    password: DataTypes.STRING,
    is_premium: DataTypes.BOOLEAN
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};