'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Cities', [
     {
      city: "Mar del Plata",
      zipcode: 7600,
      province: "Buenos Aires",
      country: "Argentina",
     },
     {
      city: "Bahia Blanca",
      zipcode: 7602,
      province: "Buenos Aires",
      country: "Argentina",
     },
     {
      city: "Necochea",
      zipcode: 7609,
      province: "Buenos Aires",
      country: "Argentina",
     },
     {
      city: "Miramar",
      zipcode: 7690,
      province: "Buenos Aires",
      country: "Argentina",
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Cities', null, {});

  }
};