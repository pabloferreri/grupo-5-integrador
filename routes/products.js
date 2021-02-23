var express = require('express');
var router = express.Router();

const products = require('../controllers/productsController');

/* GET home page. */
router.get('/', products.index);
router.get('/detalle', products.detail);

module.exports = router;