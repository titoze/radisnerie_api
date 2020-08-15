'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'CreditCards',
    [
      {
        numbers: '2222222222222222',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numbers: '11111111111111111',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CreditCard', null, {}),
};
