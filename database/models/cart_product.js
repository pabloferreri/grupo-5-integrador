'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart_Product.belongsTo(models.Product,{
        foreignKey: "product_id"
      })
      Cart_Product.belongsTo(models.Cart,{
        foreignKey: "cart_id"
      })
    }
  };
  Cart_Product.init({
    product_id: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Product',
  });
  return Cart_Product;
};