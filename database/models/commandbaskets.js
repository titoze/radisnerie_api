'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommandBasket = sequelize.define('CommandBasket', {
    commandId: DataTypes.INTEGER,
    basketId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});

  CommandBasket.associate = function(models) {
    // associations can be defined here
    CommandBasket.belongsTo(models.Basket, {
      foreignKey: 'basketId',
      as: 'basket',
      onDelete: 'CASCADE',
    });
    CommandBasket.belongsTo(models.Command, {
      foreignKey: 'commandId',
      as: 'command',
      onDelete: 'CASCADE',
    });
  };

  return CommandBasket;
};