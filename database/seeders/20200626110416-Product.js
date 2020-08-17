'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Products',
    [
      {
        name: 'Maroilles',
        price: 1,
        stock: 100,
        productCategoryId: 4,
        image: "https://www.lacremerieroyale.fr/pub/produits/maroilles-quart.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Poivron',
        price: 2,
        stock: 50,
        productCategoryId: 1,
        image: "https://assets.afcdn.com/recipe/20170607/67464_w300h300c1cx350cy350.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aubergine',
        price: 3,
        stock: 100,
        productCategoryId: 1,
        image: "https://www.biendecheznous.be/sites/default/files/styles/image_on_detailpage/public/ps_image/istock_aubergine.jpg?itok=bSr_QuF-",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Courgette',
        price: 2,
        stock: 50,
        productCategoryId: 1,
        image: "https://img-3.journaldesfemmes.fr/PVIbH_pGxMFhGPl8oEkWr3DbtaY=/910x607/smart/3d4af6fac7234c2283fd7d9cf34e6981/ccmcms-jdf/10659281.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {}),
};
