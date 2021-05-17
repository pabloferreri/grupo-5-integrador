'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Categories', 
   [
    {
      category: 'Mouses',
      createdAt: new Date,
      updatedAt:new Date
    },
    {
      category: 'Auriculares',
      createdAt: new Date,
      updatedAt:new Date
    },
    {
      category: 'Gabinetes',
      createdAt: new Date,
      updatedAt:new Date
    },   
    {
      category: 'Teclados',
      createdAt: new Date,
      updatedAt:new Date
    },   
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categories', null, {});
  }
};
