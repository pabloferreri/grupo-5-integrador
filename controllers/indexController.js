const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Product = db.Product;

/* const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 */
const indexController = {
    // MUESTRA LA PAGINA PRINCIPAL
    show : async function(req,res) {
        let products = await Product.findAll();
        return res.render('index', {products: products, title: "Home", stylesheet: "index.css"})
    },
    // MUESTRA LA PAGINA DE SHOP
    cart : async function(req,res) {
        let products = await Product.findAll();
        return res.render('carrito',  {products: products, title: "Carrito", stylesheet: "carrito.css"})
    },
}

module.exports = indexController;