'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Commands',
    [
      {
        userId: 2,
        price: 20
      },
      {
        userId: 2,
        price: 20
      },
      {
        userId: 3,
        price: 20
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Commands', null, {}),
};
