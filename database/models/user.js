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
    is_premium: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
  }, {});

  User.associate = function(models) {
    User.hasMany(models.CreditCard, {
      foreignKey: 'userId',
      as: 'users',
      onDelete: 'CASCADE',
    });
  };

  return User;
};