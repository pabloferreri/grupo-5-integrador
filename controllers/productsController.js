const fs = require('fs');
const path = require('path');
const { title } = require('process');
const ProductModel = require("../models/Products");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let maxId = 0;
products.forEach(element => {
	if(element.id > maxId){ 
		maxId = element.id;
	}
});
maxId++;


const productsController = {
    index : function(req,res) {
        return res.render('products/product-list',{products: products, title : "Productos", stylesheet: 'product-list.css'})
    },
    detail : (req, res) => {
		const product = ProductModel.findByPk(req.params.id);
		
		if (product) {
			return res.render('products/detail',{product: product, title : "Detalle del producto", stylesheet: 'detail.css'})
		}else{
			return res.send("error");
		}
		
    },
    create: (req,res)=>{
        return res.render('products/crear-producto',{title: "Crear Producto", stylesheet: "crear-producto.css"});
    },
    // Create -  Method to store
	store: (req, res) => {

		console.log(req.body);
		console.log(req.file);
		
		ProductModel.createProduct(req.body,req.file);

		return res.redirect("/productos")	
	},
    
	edit: (req, res) => {
		
		let product=products.find(product=>(product.id==req.params.id));

		return res.render("products/edit-product", {product: product, title: "Editar producto", stylesheet: "edit-product.css"})
	},
    update: (req, res) => { 

		console.log(req.body);
		
		let productToEdit=products.find(product=>(product.id==req.params.id));

		console.log(req.file)

 		let newArray = products.map(product=>{

			 if(product.id==productToEdit.id){
				product.name =req.body.name;
				product.price =req.body.price;
				product.discount =req.body.discount;
				product.category =req.body.category;
				product.description =req.body.description;
				product.image = req.file.originalname;
			 }
			 return product;
		 })

		 let productJson = JSON.stringify(newArray, null, 2);
		 fs.writeFileSync('./data/productsDataBase.json', productJson);
		 		

		res.redirect("/");
	},
	delete: (req,res) => {
		console.log(req.params.id);


		let leftProducts = products.filter(oneProduct => oneProduct.id != req.params.id);

		console.log(leftProducts);

		let productJson = JSON.stringify(leftProducts, null, 2);
		fs.writeFileSync('./data/productsDataBase.json', productJson);

		return res.redirect('/')
	}
}

module.exports = productsController;