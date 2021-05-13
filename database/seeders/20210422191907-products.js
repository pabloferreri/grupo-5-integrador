'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', [
      {
      name: "Teclado Gamer",
      price: 15000,
      discount: 15,
      stock: 10,
      category_id: 2, 
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      condition_id: 2,
      image_main: "teclado.jpg"
     },
     {
      name: "Teclado Gamer",
      price: 15000,
      discount: 15,
      stock: 10,
      category_id: 2, 
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      condition_id: 1,
      image_main: "teclado.jpg"
     },
     {
      name: "Teclado Gamer",
      price: 15000,
      discount: 15,
      stock: 10,
      category_id: 2, 
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      condition_id: 3,
      image_main: "teclado.jpg"
     },
     {
      name: "Teclado Gamer",
      price: 15000,
      discount: 15,
      stock: 10,
      category_id: 2, 
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      condition_id: 3,
      image_main: "teclado.jpg"
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
