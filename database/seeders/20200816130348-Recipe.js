'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Recipes',
    [
      {
        name: 'Blanquette de veau',
        caloric: '575'
      },
      {
        name: 'Lasagnes à la bolognaise',
        caloric: '2500'
      },
      {
        name: 'Hachis Parmentier',
        caloric: '650'
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recipe', null, {}),
};
