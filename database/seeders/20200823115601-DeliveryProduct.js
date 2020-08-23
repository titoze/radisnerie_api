'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'DeliveryProducts',
    [
      {
        deliveryId: 1,
        productId: 2,
        quantity: 100
      },
      {
        deliveryId: 1,
        productId: 3,
        quantity: 50
      },
      {
        deliveryId: 1,
        productId: 4,
        quantity: 20
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('DeliveryProducts', null, {}),
};

