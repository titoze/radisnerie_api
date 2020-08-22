'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Recipes',
    [
      {
        name: 'Ratatouille',
        caloric: '575',
        realisationTime: 60,
        difficulty: 'medium'
      },
      {
        name: 'Rosti au Maroilles',
        caloric: '2500',
        realisationTime: 30,
        difficulty: 'easy'

      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recipe', null, {}),
};
