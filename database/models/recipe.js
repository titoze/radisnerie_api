'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    caloric: DataTypes.STRING
  }, {});

  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.hasMany(models.RecipeProduct, {
      foreignKey: 'recipeId',
      as: 'RecipeProducts',
      onDelete: 'CASCADE',
    });
  };

  return Recipe;
};