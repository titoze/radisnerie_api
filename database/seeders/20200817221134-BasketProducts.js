'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'BasketProducts',
    [
      {
        basketId: 1,
        productId: 1
      },
      {
        basketId: 1,
        productId: 2
      },
      {
        basketId: 1,
        productId: 3
      },
      {
        basketId: 1,
        productId: 4
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('BasketProducts', null, {}),
};

