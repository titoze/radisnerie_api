'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      address: {
        type: Sequelize.STRING
      },
      additional_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      is_premium: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};