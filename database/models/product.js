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
        as: "categories",
        foreignKey: "category_id"
      })
      Product.belongsTo(models.Condition,{
        as: "conditions",
        foreignKey: "condition_id"
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
    condition_id:DataTypes.INTEGER,
    image_main: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};