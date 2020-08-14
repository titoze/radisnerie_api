'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Products',
    [
      {
        name: 'Carotte',
        price: 1,
        stock: 100,
        productCategoryId: 1,
        image: "https://img.cuisineaz.com/680x357/2018-07-03/i140769-carotte.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Poivron',
        price: 2,
        stock: 50,
        productCategoryId: 1,
        image: "https://img.cuisineaz.com/680x357/2018-07-03/i140769-carotte.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Orange',
        price: 3,
        stock: 100,
        productCategoryId: 2,
        image: "https://img.cuisineaz.com/680x357/2018-07-03/i140769-carotte.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Banane',
        price: 2,
        stock: 50,
        productCategoryId: 2,
        image: "https://img.cuisineaz.com/680x357/2018-07-03/i140769-carotte.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {}),
};
