const usersController = {
    register : function(req,res) {
        return res.render('register', {title : "Register"})
    },
    login : function(req,res) {
        return res.render('login', {title : "Login",
    stylesheet : "login.css"})
    }
}

module.exports = usersController;