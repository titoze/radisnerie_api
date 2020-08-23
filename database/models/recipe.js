'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    caloric: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    realisationTime: DataTypes.STRING
  }, {});

  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.hasMany(models.RecipeProduct, {
      foreignKey: 'recipeId',
      as: 'RecipeProducts',
      onDelete: 'CASCADE',
    });
    Recipe.hasMany(models.RecipeTag, {
      foreignKey: 'recipeId',
      as: 'RecipeTags',
      onDelete: 'CASCADE',
    });
    Recipe.hasMany(models.RecipeStep, {
      foreignKey: 'recipeId',
      as: 'RecipeTags',
      onDelete: 'CASCADE',
    });
  };

  return Recipe;
};