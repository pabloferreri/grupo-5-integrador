const usersController = {
    register : function(req,res) {
        return res.render('user/register', {title : "Registrarse", stylesheet: "register.css"})
    },
    login : function(req,res) {
        return res.render('user/login', {title : "Iniciar Sesión",stylesheet : "login.css"})
    }
}

module.exports = usersController;