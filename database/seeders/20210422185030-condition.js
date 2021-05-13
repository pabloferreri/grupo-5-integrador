'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkInsert('Conditions', 
   [
    {
      condition_name: 'visited',
      createdAt: new Date,
      updatedAt:new Date
    },
    {
      condition_name: 'in-sale',
      createdAt: new Date,
      updatedAt:new Date
    },
    {
      condition_name: 'available',
      createdAt: new Date,
      updatedAt:new Date
    },   
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Conditions', null, {});
  }
}