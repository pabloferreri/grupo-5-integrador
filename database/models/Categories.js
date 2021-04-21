module.exports = function (sequelize,dataTypes) {

    let alias = "Categoria";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        categoryName:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "category",
        timestamps:false
    }
    
    let Categories = sequelize.define(alias,cols,config);

    Categories.associate = function (models) {
        Categories.hasMany(models.Producto,{
            as:"productos",
            foreignKey: "categoryId"
        })
    }

    return Categories;
}