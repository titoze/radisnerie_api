'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'CommandBaskets',
    [
      {
        commandId: 1,
        basketId: 1
      },
      {
        commandId: 2,
        basketId: 1
      },
      {
        commandId: 3,
        basketId: 1
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('CommandBaskets', null, {}),
};
