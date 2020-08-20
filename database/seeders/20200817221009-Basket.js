'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Baskets',
    [
      {
        name: 'Le Nord provencal',
        price: 20,
        description: 'Découvrez le panier qui réchauffe vos papilles !',
        image: 'http://www.lahalledantan.com/57-large_default/le-panier-d-hiver.jpg'
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Baskets', null, {}),
};

