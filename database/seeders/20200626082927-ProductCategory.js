'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'ProductCategories',
    [
      {
        name: 'Légumes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fruit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ProductCategory', null, {}),
};