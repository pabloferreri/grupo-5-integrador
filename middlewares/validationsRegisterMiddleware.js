const { body } = require("express-validator");
const path = require("path");

const validations = [
    body("name")
        .notEmpty().withMessage("Ingrese su nombre"),
    body("lastname")
        .notEmpty().withMessage("Ingrese su apellido"),
    body("address")
        .notEmpty().withMessage("Ingrese la calle de su domicilio"),
    body("number")
        .notEmpty().withMessage("Ingrese el numero de su domicilio"),
    body("city")
        .notEmpty().withMessage("Ingrese la ciudad donde vive"),
    body("zipCode")
        .notEmpty().withMessage("Ingrese el codigo postal de su domicilio"),
    body("province")
        .notEmpty().withMessage("Ingrese la provincia donde vive"),
    body("country")
        .notEmpty().withMessage("Ingrese el pais donde vive"),
    body("email")
        .notEmpty().withMessage("Ingrese un email válido").bail()
        .isEmail().withMessage('El formato del email ingresado no es válido'),
    body("phone")
        .notEmpty().withMessage("Ingrese un numero de teléfono"),
    body("password")
        .notEmpty().withMessage("Ingrese una contraseña"),
    body("passwordConfirmation")
        .notEmpty().withMessage("Las contraseñas no coinciden"),
    body('avatar').custom((value,{req})=>{
        let file = req.file;
        let extensions = ['.jpg','.png','.gif', 'svg', 'jpeg'];
        if(!file){
            throw new Error('Tienes que introducir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!extensions.includes(fileExtension)){
                throw new Error(`Solo puedes introducir imagenes en los siguientes formatos ${extensions.join(', ')}`);
            }
        }

        return true
    })
]

module.exports = validations;