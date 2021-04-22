'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Cart,{
        through: "cart_products", 
        as: "cart",
        foreignKey: "product_id"
      })
      Product.belongsTo(models.Category,{
        foreignKey: "category_id"
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image_main: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};