'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Product', [{
      name: "Teclado Gamer",
      price: 15000,
      discount: 15,
      stock: 10,
      category_id: 2,
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      image: "teclado.jpg"
     }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Product', null, {});

  }
};
