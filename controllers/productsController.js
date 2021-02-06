
const productsController = {
    show : function(req,res) {
        return res.render('product-list',{title : "Products", stylesheet: "product-list.css"})
    }
}

module.exports = productsController;