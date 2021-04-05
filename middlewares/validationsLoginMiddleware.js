const { body } = require("express-validator");
const path = require("path");

const validations = [
    
    body("email")
        .notEmpty().withMessage("Ingrese un email válido").bail()
        .isEmail().withMessage('El formato del email ingresado no es válido'),
    body("password")
        .notEmpty().withMessage("Ingrese una contraseña"),
    
]

module.exports = validations;