
const productsController = {
    show : function(req,res) {
        return res.render('product-list',{title : "Products"})
    }
}

module.exports = productsController;