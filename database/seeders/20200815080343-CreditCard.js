'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'CreditCards',
    [
      {
        numbers: '5522080321918963',
        userId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numbers: '5552392800232151',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numbers: '4359266798857203',
        userId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CreditCard', null, {}),
};
