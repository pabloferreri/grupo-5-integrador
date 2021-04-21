module.exports = function (sequelize,dataTypes) {

    let alias = "Producto";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        productName:{
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.DOUBLE,
        },
        discount:{
            type: dataTypes.INTEGER,
        },
        stockId:{ 
            type: dataTypes.INTEGER,
        },
        categoryId:{
            type: dataTypes.INTEGER,
        },
        description:{
            type: dataTypes.TEXT,
        },
        imageId:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "products",
        timestamps:false
    }
    
    let Products = sequelize.define(alias,cols,config);

    Products.associate = function (models) {
        Products.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey:"categoryId" 
        })
    }

    return Products;
}