var express = require('express');
var router = express.Router();

const users = require('../controllers/usersController');

/* GET users listing. */
router.get('/register', users.register);
router.get('/login', users.login);

module.exports = router;
