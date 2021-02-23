const usersController = {
    register : function(req,res) {
        return res.render('users/register', {title : "Registrarse", stylesheet: "register.css"})
    },
    login : function(req,res) {
        return res.render('users/login', {title : "Iniciar Sesión",stylesheet : "login.css"})
    }
}

module.exports = usersController;