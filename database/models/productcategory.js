'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    name: DataTypes.STRING
  }, {});

  ProductCategory.associate = function(models) {
    // associations can be defined here
    ProductCategory.hasMany(models.Product, {
      foreignKey: 'productCategoryId',
      as: 'products',
      onDelete: 'CASCADE',
    });
  };

  return ProductCategory;
};