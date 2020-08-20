'use strict';
module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('Basket', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});

  Basket.associate = function(models) {
    // associations can be defined here
    Basket.hasMany(models.BasketProduct, {
      foreignKey: 'basketId',
      as: 'BasketProducts',
      onDelete: 'CASCADE',
    });
  };

  return Basket;
};