var express = require('express');
var router = express.Router();

const users = require('../controllers/usersController');

/* GET users listing. */
router.get('/registro', users.register);
router.get('/iniciar-sesion', users.login);

module.exports = router;
