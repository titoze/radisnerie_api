'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    retailerId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});

  Delivery.associate = function(models) {
    // associations can be defined here
    Delivery.belongsTo(models.Retailer, {
      foreignKey: 'retailerId',
      as: 'retailer',
      onDelete: 'CASCADE',
    });
  };

  return Delivery;
};