'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RecipeProduct.init({
    productId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeProduct',
  });
  return RecipeProduct;
};


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

  return Product;
};