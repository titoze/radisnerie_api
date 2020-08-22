'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RecipeProducts',
    [
      {
        recipeId: 1,
        productId: 2,
        unity: 'g',
        quantity: 100
      },
      {
        recipeId: 1,
        productId: 3,
        unity: 'g',
        quantity: 175
      },
      {
        recipeId: 1,
        productId: 4,
        unity: 'g',
        quantity: 175
      },
      {
        recipeId: 2,
        productId: 1,
        unity: 'g',
        quantity: 50
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RecipeProducts', null, {}),
};

