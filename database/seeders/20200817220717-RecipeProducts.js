'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RecipeProducts',
    [
      {
        recipeId: 1,
        productId: 2
      },
      {
        recipeId: 1,
        productId: 3
      },
      {
        recipeId: 1,
        productId: 4
      },
      {
        recipeId: 2,
        productId: 1
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RecipeProducts', null, {}),
};

