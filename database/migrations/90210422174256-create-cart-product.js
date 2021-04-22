'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cart_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:{
            tableName: "Products",
          },
          key:"id"
        }
      },
      cart_id: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:{
            tableName: "Carts",
          },
          key:"id"
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cart_Products');
  }
};