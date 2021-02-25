const fs = require('fs');
const path = require('path');
const { title } = require('process');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
    index : function(req,res) {
        return res.render('products/product-list',{products: products, title : "Productos", stylesheet: 'product-list.css'})
    },
    detail : (req, res) => {
		const product = products.find(product => product.id == req.params.id);

		if (product) {
			return res.render('products/detail',{product: product, title : "Detalle del prodcto", stylesheet: 'detail.css'})
		}else{
			return res.send("error");
		}
		
        //return res.render('products/detail',{products: products, title : "Detalle del prodcto", stylesheet: 'detail.css'})
    }
}

module.exports = productsController;