var express = require('express');
var router = express.Router();
const path = require('path');
const { body } = require("express-validator");


const validations = [
    body("name")
        .notEmpty().withMessage("Ingrese su nombre"),
    body("lastname")
        .notEmpty().withMessage("Ingrese su apellido"),
    body("email")
        .notEmpty().withMessage("Ingrese un email valido").bail()
        .isEmail().withMessage('El formato del email ingresado no es válido'),
    body("phone")
        .notEmpty().withMessage("Ingrese un número de teléfono").bail()
        .isInt().withMessage('Ingrese un caracter valido'),
    body("avatar")
        .notEmpty().withMessage("Ingrese una contraseña").bail()
]



//----------- multer require ------------------
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({

    destination: (req,file,cb)=>{
        cb(null,"./public/images/avatars");
    },
    filename: (req,file,cb)=>{
        let imageName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,imageName);
    }

})

let fileUpload = multer({storage: multerDiskStorage});

//----------- user Controller require ------
const users = require('../controllers/usersController');

/* GET users listing. */

//----------- register -----------------
router.get('/registro', users.register);
router.post('/registro',validations,fileUpload.single("avatar"),users.save);


//----------- login -----------------
router.get('/iniciar-sesion', users.login);
router.get('/perfil', users.profile);


router.get('/editar', users.edit);

router.put('/perfil', users.update);
router.post('/acceder', users.access);
router.delete('/desactivar', users.delete);

module.exports = router;