var express = require('express');
var router = express.Router();
const path = require('path');

// express-validator 
const validationsRegister = require('../middlewares/validationsRegisterMiddleware');
const validationsLogin = require('../middlewares/validationsLoginMiddleware');


//----------- multer require ------------------
const multer = require('../middlewares/multerMiddleware')



//----------- user Controller require ------
const users = require('../controllers/usersController');


/* GET users listing. */

//----------- register -----------------
router.get('/registro', users.register);
router.post('/registro',multer.single("avatar"),validationsRegister,users.registrationProcess);


//----------- login -----------------
router.get('/iniciar-sesion', users.login);
router.post('/iniciar-sesion',validationsLogin,users.loginProcess);


router.get('/perfil', users.profile);


router.get('/editar', users.edit);

router.put('/perfil', users.update);

router.delete('/desactivar', users.delete);

module.exports = router;