'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstname: 'Foo',
        lastname: 'Baz',
        email: 'foo@baz.com',
        address: '1 rue victor hugo',
        city: 'Valenciennes',
        zip: '59300',
        password: 'azerty',
        is_premium: false,
      },
      {
        firstname: 'Toto',
        lastname: 'Tombe à l\'eau',
        email: 'toto@baz.com',
        address: '1 rue de la victoire',
        city: 'Lille',
        zip: '59000',
        password: '123456',
        is_premium: true,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};

