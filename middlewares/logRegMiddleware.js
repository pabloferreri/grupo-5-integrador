function logRegMiddleware (req,res,next){
    if (!req.session.userLogged) {
        return res.redirect("/usuarios/iniciar-session");
    }
    next();
}

module.exports = logRegMiddleware;