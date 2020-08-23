'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RecipeSteps',
    [
      {
        order: 1,
        recipeId: 2,
        details: 'Faire rissoler les oignons.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order: 2,
        recipeId: 2,
        details: 'Couper des des tranches de maroilles.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order: 1,
        recipeId: 1,
        details:'Couper les légumes en rondelles.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('RecipeSteps', null, {}),
};