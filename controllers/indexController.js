const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    show : function(req,res) {
        return res.render('index', {products: products, title: "Home", stylesheet: "index.css"})
    }
}

module.exports = productsController;