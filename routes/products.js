var express = require('express');
var router = express.Router();
const path = require('path');


//----------- multer require ------------------
const multer = require('../middlewares/multerProductMiddelware')

//----------- product Controller require ------
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', productsController.index);

//----------- create product -----------------
router.get('/crear', productsController.create);
router.post('/crear', multer.single("image"),productsController.store); 

//----------- product detail -----------------
router.get('/:id', productsController.detail);


//----------- edit product -------------------
router.get('/:id/edit', productsController.edit);
router.put('/edit/:id',multer.single("image"),productsController.update);


//----------- delete product -------------------
router.delete('/eliminar/:id', productsController.delete)


module.exports = router;