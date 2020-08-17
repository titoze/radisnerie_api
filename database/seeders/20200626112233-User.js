'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstname: 'Super',
        lastname: 'Admin',
        email: 'admin@rasdinerie.com',
        address: '1 rue victor hugo',
        city: 'Lille',
        zip: '59000',
        password: 'password',
        is_premium: false,
        role: 'admin'
      },
      {
        firstname: 'Jean',
        lastname: 'Louche',
        email: 'jlouche@gmail.com',
        address: '1 rue de la victoire',
        city: 'Lille',
        zip: '59000',
        password: '123456',
        is_premium: true,
        role: 'user'
      },
      {
        firstname: 'Zoe',
        lastname: 'Kesako',
        email: 'zoe.kesako@gmail.com',
        address: '1 rue Solferino',
        city: 'Lille',
        zip: '59000',
        password: '123456',
        is_premium: true,
        role: 'user'
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};

