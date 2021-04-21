module.exports = function (sequelize,dataTypes) {

    let alias = "Domicilio";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        street:{
            type: dataTypes.STRING,
        },
        addresNumber:{
            type: dataTypes.INTEGER,
        },
        city:{
            type: dataTypes.STRING,
        },
        province:{
            type: dataTypes.STRING,
        },
        country:{
            type: dataTypes.STRING,
        },
        zipCode:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "address",
        timestamps:false
    }
    
    let Address = sequelize.define(alias,cols,config);

    Address.associate = function (models) {
        Address.belongsTo(models.Usuario,{
            as: "domicilio",
            foreignKey:"addressId" 
        })
    }

    return Address;
}