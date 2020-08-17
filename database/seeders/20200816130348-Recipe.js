'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Recipes',
    [
      {
        name: 'Ratatouille',
        caloric: '575'
      },
      {
        name: 'Rosti au Maroilles',
        caloric: '2500'
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recipe', null, {}),
};
