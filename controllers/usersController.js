const usersController = {
    register : function(req,res) {
        return res.render('register', {title : "Register", stylesheet: "register.css"})
    },
    login : function(req,res) {
        return res.render('login', {title : "Login",
    stylesheet : "login.css"})
    }
}

module.exports = usersController;