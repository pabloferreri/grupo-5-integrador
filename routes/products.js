var express = require('express');
var router = express.Router();
const path = require('path');


//----------- multer require ------------------
const multer = require('multer');

let multerDiskStorege = multer.diskStorage({

    destination: (req,file,cb)=>{
        let folder = path.join(__dirname,"../public/images/products");
        cb(null,folder);
    },
    filename: (req,file,cb)=>{
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null,imageName);
    }

})

let fileUpload = multer({storege: multerDiskStorege});

//----------- product Controller require ------
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', productsController.index);

//----------- product detail -----------------
router.get('/detalle/:id', productsController.detail);

//----------- create product -----------------
router.get('/crear', productsController.create);
router.post('/crear', fileUpload.single("image"),productsController.store); 

//----------- edit product -------------------
router.get('/:id/edit', productsController.edit);
router.put('/edit/:id',fileUpload.single("image"),productsController.update)

module.exports = router;