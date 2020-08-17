'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    productCatgeroyId: DataTypes.INTEGER
  }, {});

  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.ProductCategory, {
      foreignKey: 'productCategoryId',
      as: 'productCategory',
      onDelete: 'CASCADE',
    });
  };

  return Product;
};