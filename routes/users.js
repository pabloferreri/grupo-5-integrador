var express = require('express');
var router = express.Router();
const path = require('path');

// express-validator 
const { body } = require("express-validator");

const validations = [
    body("name").notEmpty().withMessage("Ingrese su nombre"),
    body("lastname").notEmpty().withMessage("Ingrese su apellido"),
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
        let extensions = ['.jpg','.png','.gif'];
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
const e = require('express');

/* GET users listing. */

//----------- register -----------------
router.get('/registro', users.register);
router.post('/registro',fileUpload.single("avatar"),validations,users.save);


//----------- login -----------------
router.get('/iniciar-sesion', users.login);
router.get('/perfil', users.profile);


router.get('/editar', users.edit);

router.put('/perfil', users.update);
router.post('/acceder', users.access);
router.delete('/desactivar', users.delete);

module.exports = router;