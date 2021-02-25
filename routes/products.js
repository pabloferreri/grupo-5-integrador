var express = require('express');
var router = express.Router();

const products = require('../controllers/productsController');

/* GET home page. */
router.get('/', products.index);
router.get('/:id', products.detail);

module.exports = router;