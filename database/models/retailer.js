'use strict';
module.exports = (sequelize, DataTypes) => {
  const Retailer = sequelize.define('Retailer', {
    name: DataTypes.STRING,
    owner_firstname: DataTypes.STRING,
    owner_lastname: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    address: DataTypes.STRING,
    additional_address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  Retailer.associate = function(models) {
    // associations can be defined here
  };

  return Retailer;
};