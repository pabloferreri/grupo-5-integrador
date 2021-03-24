var express = require('express');
var router = express.Router();

const users = require('../controllers/usersController');

/* GET users listing. */
router.get('/registro', users.register);
router.get('/iniciar-sesion', users.login);
router.get('/perfil', users.profile);
router.get('/editar', users.edit);
router.post('/guardar', users.save);
router.put('/perfil', users.update);
router.post('/acceder', users.access);
router.delete('/desactivar', users.delete);

module.exports = router;