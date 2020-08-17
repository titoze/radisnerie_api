'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Baskets',
    [
      {
        name: 'Le Nord provencal',
        price: 20
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Baskets', null, {}),
};

