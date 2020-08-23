'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipeStep = sequelize.define('RecipeStep', {
    order: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
    details: DataTypes.STRING
  }, {});

  RecipeStep.associate = function(models) {
    // associations can be defined here
    RecipeStep.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      as: 'recipe',
      onDelete: 'CASCADE',
    });
  };

  return RecipeStep;
};