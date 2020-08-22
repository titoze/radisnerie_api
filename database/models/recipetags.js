'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipetag = sequelize.define('Recipetag', {
    name: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});

  Recipetag.associate = function(models) {
    // associations can be defined here
    Recipetag.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      as: 'recipe',
      onDelete: 'CASCADE',
    });
  };

  return Recipetag;
};