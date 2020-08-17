'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeProduct = sequelize.define('RecipeProduct', {
    productId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});

  RecipeProduct.associate = function(models) {
    // associations can be defined here
    RecipeProduct.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
      onDelete: 'CASCADE',
    });
    RecipeProduct.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      as: 'product',
      onDelete: 'CASCADE',
    });
  };

  return RecipeProduct;
};