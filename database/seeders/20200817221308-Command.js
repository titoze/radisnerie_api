'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Commands',
    [
      {
        userId: 2,
        price: 20,
        address: '82 Rue du poisson rouge',
        additional_address: 'Appartement d05',
        city: 'Lomme',
        zip: '59160',
        deliveryDate: new Date()
      },
      {
        userId: 2,
        price: 20,
        address: '60 Rue du général de gaulle',
        additional_address: '',
        city: 'Somewhere',
        zip: '59001',
        deliveryDate: new Date()
      },
      {
        userId: 3,
        price: 20,
        address: '20 Avenue du perdu',
        additional_address: '',
        city: 'Lille',
        zip: '59160',
        deliveryDate: new Date()
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Commands', null, {}),
};
