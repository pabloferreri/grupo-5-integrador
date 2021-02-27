var express = require('express');
var router = express.Router();

const products = require('../controllers/productsController');

/* GET home page. */
router.get('/', products.index);
router.get('/detalle/:id', products.detail);
router.get('/crear', products.showCreate);
router.get('/edit', products.showCreate);

module.exports = router;