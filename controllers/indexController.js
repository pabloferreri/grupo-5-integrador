const productsController = {
    show : function(req,res) {
        return res.render('index', {title : "Home"})
    }
}

module.exports = productsController;