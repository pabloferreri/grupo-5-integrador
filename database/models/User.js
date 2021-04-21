module.exports = function (sequelize,dataTypes) {

    let alias = "Usuario";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        userName:{
            type: dataTypes.STRING,
        },
        userLastName:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        phone:{
            type: dataTypes.INTEGER,
        },
        addressId:{
            type: dataTypes.INTEGER,
        },
        password:{
            type: dataTypes.STRING,
        },
        avatarId:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "users",
        timestamps:false
    }
    
    let Users = sequelize.define(alias,cols,config);

    Users.associate = function (models) {
        Users.belongsTo(models.Domicilio,{
            as: "domicilio",
            foreignKey:"addressId" 
        })
    }

    return Users;
}