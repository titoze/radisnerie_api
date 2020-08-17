'use strict';
module.exports = (sequelize, DataTypes) => {
  const BasketProduct = sequelize.define('BasketProduct', {
    basket_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});

  BasketProduct.associate = function(models) {
    // associations can be defined here
    BasketProduct.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
      onDelete: 'CASCADE',
    });
    BasketProduct.belongsTo(models.Basket, {
      foreignKey: 'basketId',
      as: 'basket',
      onDelete: 'CASCADE',
    });
  };

  return BasketProduct;
};