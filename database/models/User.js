'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.City,{
        foreignKey: "city_id",
        as: "Cities"
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};