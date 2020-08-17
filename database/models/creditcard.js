'use strict';

module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define('CreditCard', {
    numbers: DataTypes.STRING,
    userId: DataTypes.TEXT
  }, {});

  CreditCard.associate = function(models) {
    // associations can be defined here
    CreditCard.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
      onDelete: 'CASCADE',
    });
  };

  return CreditCard;
};