const fs = require('fs');
const path = require('path');
const { title } = require('process');
/* const ProductModel = require("../models/Products"); */
const db = require('../database/models');
const { includes } = require('../middlewares/validationsRegisterMiddleware');
const Product = db.Product;
const Category = db.Category;
const Condition = db.Condition;


/* const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */



const productsController = {
    index : async function(req,res) {
		let products = await Product.findAll( { include:["categories","conditions" ] }); 
		
        return res.render('products/product-list',{products: products, title : "Productos", stylesheet: 'product-list.css'})
    },
    
    create: async(req,res)=>{
		let category= await Category.findAll();
		let condition= await Condition.findAll();
		

        return res.render('products/crear-producto',{
			title: "Crear Producto", 
			stylesheet: "crear-producto.css",
			category:category,
			condition:condition
		});
    },
    // Create -  Method to store
	store: (req, res) => {

		
		//ProductModel.createProduct(req.body,req.file);
		console.log(req.body)

		const price = parseInt(req.body.price);
        const discount = parseInt(req.body.discount);
		const stock = parseInt(req.body.stock);

        const productToStore = {
			"name": req.body.name,
			"price": price,
			"discount": discount,
			"stock": stock,
			"category_id":req.body.category_id,
			"description":req.body.description,
			"condition_id":req.body.condition_id,
			"image_main": req.file.filename,
		}

        
        Product.create(productToStore);

		return res.redirect("/productos")
	},
	detail : async(req, res) => {

		try {
			const product = await Product.findByPk(req.params.id);
			return res.render('products/detail',{product: product, title : "Detalle del producto", stylesheet: 'detail.css'})

		} catch (error) {

			res.send(error);
			
		}
			
    },    
	edit: async(req, res) => {
		
		let product= await Product.findByPk(req.params.id);
		let category= await Category.findAll();
		let condition= await Condition.findAll();
	
		return res.render("products/edit-product", {
			product: product, 
			title: "Editar producto", 
			stylesheet: "edit-product.css",
			category:category,
			condition:condition
		})
	},
    update: async(req, res) => { 
		console.log(req.body)

		await Product.update(req.body,
		{
			where: {id: req.params.id}
		})

 		// let newArray = products.map(product=>{

		// 	 if(product.id==productToEdit.id){
		// 		product.name =req.body.name;
		// 		product.price =req.body.price;
		// 		product.discount =req.body.discount;
		// 		product.category =req.body.category;
		// 		product.description =req.body.description;
		// 		product.image = req.file.originalname;
		// 	 }
		// 	 return product;
		//  })

		//  let productJson = JSON.stringify(newArray, null, 2);
		//  fs.writeFileSync('./data/productsDataBase.json', productJson);
		 		

		res.redirect("/");
	},
	
	delete: async(req,res) => {

		try {
			await Product.destroy({
				where:{id:req.params.id}
			})
			return res.redirect('/');
			
		} catch (error) {
			res.send(error);
		}
	}
}

module.exports = productsController;