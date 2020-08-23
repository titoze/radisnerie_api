'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Retailers',
    [
      {
        name: 'La ferme du Nord',
        owner_firstname: 'Jean',
        owner_lastname: 'Ferme',
        city: 'Lomme',
        zip: '59160',
        address: 'Rue de la pature',
        phone: '+33658624512',
        email: 'lafermedunord@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Retailers', null, {}),
};
