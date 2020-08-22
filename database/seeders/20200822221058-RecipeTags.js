'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RecipeTags',
    [
      {
        name: 'Nord',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fromage',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hiver',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Légumes',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Provence',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ProductCategory', null, {}),
};