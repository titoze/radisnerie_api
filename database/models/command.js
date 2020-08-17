'use strict';
module.exports = (sequelize, DataTypes) => {
  const Command = sequelize.define('Command', {
    userId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    date: DataTypes.DATE
  }, {});

  Command.associate = function(models) {
    // associations can be defined here
    Command.hasMany(models.CommandBaskets, {
      foreignKey: 'commandtId',
      as: 'CommandBaskets',
      onDelete: 'CASCADE',
    });
    Command.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };

  return Command;
};