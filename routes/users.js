var express = require('express');
var router = express.Router();
const path = require('path');

// express-validator 
const validationsRegister = require('../middlewares/validationsRegisterMiddleware');
const validationsLogin = require('../middlewares/validationsLoginMiddleware');
const profileMiddleware = require('../middlewares/profileMiddleware');
const logRegMiddleware = require('../middlewares/logRegMiddleware');


//----------- multer require ------------------
const multer = require('../middlewares/multerMiddleware')



//----------- user Controller require ------
const users = require('../controllers/usersController');
const { userInfo } = require('os');


/* GET users listing. */

//----------- register -----------------
router.get('/registro',profileMiddleware, users.register);
router.post('/registro',multer.single("avatar"),validationsRegister,users.registrationProcess);


//----------- login -----------------
router.get('/iniciar-sesion', profileMiddleware, users.login);
router.post('/iniciar-sesion',validationsLogin,users.loginProcess);


router.get('/perfil', logRegMiddleware,users.profile);

router.get('/logout', users.logout)


router.get('/editar', users.edit);

router.put('/perfil', users.update);

router.delete('/desactivar', users.delete);

module.exports = router;