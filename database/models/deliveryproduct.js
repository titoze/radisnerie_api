'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeliveryProduct = sequelize.define('DeliveryProduct', {
    deliveryId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});

  DeliveryProduct.associate = function(models) {
    // associations can be defined here
    DeliveryProduct.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
      onDelete: 'CASCADE',
    });
    DeliveryProduct.belongsTo(models.Retailer, {
      foreignKey: 'retailerId',
      as: 'retailer',
      onDelete: 'CASCADE',
    });
  };

  return DeliveryProduct;
};