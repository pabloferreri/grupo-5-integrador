function isLoggedMiddelware(req,res,next) {
    console.log("hola")
    res.locals.isLogged = false;

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }

    next();
}

module.exports = isLoggedMiddelware;