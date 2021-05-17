'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', [
      {
      name: "Gabinete Gamer",
      price: 95000,
      discount: 15,
      stock: 10,
      category_id: 2, 
      description: "Gabinete Gamer Xigmatek Eros Rgb Atx Vidrio Templado.",
      condition_id: 2,
      image_main: "gabinete.jpg"
     },
     {
      name: "Teclado Gamer",
      price: 15000,
      discount: 20,
      stock: 40,
      category_id: 2, 
      description: "Increíble Teclado Gamer con teclas de Alta Sensibilidad para conseguir la mejor experiencia.",
      condition_id: 1,
      image_main: "teclado.jpg"
     },
     {
      name: "Mouse Gamer",
      price: 8500,
      discount: 10,
      stock: 50,
      category_id: 2, 
      description: "Mouse de juego Genius GX Gaming Scorpion Spear Pro negro.",
      condition_id: 3,
      image_main: "mouseGamer.jpg"
     },
     {
      name: "Auriculares Gamer",
      price: 15000,
      discount: 15,
      stock: 800,
      category_id: 2, 
      description: "Auriculares gamer Kotion Each G9000 black y blue.",
      condition_id: 3,
      image_main: "auriculares.jpg"
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
