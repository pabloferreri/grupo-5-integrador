const productsController = {
    show : function(req,res) {
        return res.render('index', {title : "Home", stylesheet: "index.css"})
    }
}

module.exports = productsController;