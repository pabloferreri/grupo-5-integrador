const fs = require('fs');
const path = require('path');
const { send } = require('process');
const bcryptjs = require('bcryptjs');
const {validationResult} = require("express-validator")


const userFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

let maxId = 0;
users.forEach(element => {
	if(element.id > maxId){ 
		maxId = element.id;
	}
});
maxId++;


const usersController = {
    login:(req,res)=>{
        return res.render('users/login', {title : "Iniciar Sesión",stylesheet : "login.css"});
    },
    register:(req,res)=>{
        return res.render('users/register', {title : "Registrarse", stylesheet: "register.css"});
    },
    access: (req,res)=>{

    },
    save: (req,res)=>{
        
        const resultValidation = validationResult(req)

        //return res.send({result: resultValidation.mapped()})
        //console.log(resultValidation.erro.length)

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', { title : "Registrarse", stylesheet: "register.css",errors: resultValidation.mapped(), oldData: req.body})
        }else{
        
        const passwordPlainText = req.body.password;
        const passwordHash = bcryptjs.hashSync(passwordPlainText, 10);

        const userToSave = {
			"id": maxId,
			"name": req.body.name,
            "lastName": req.body.lastname,
			"email":req.body.email,
			"phone":req.body.phone,
			"password": passwordHash,
			"image": req.file.filename
		}

		
        let confirmPassword = req.body.passwordConfirmation;
        if(passwordPlainText == confirmPassword){
            users.push(userToSave);
            let userJson=JSON.stringify(users,null,2);
            console.log(req.body);
            fs.writeFileSync("./data/usersDataBase.json",userJson);
    
            return res.redirect("/productos");
        }else{
            console.log("error al registrarse")
            return res.render('users/register', {title : "Registrarse", stylesheet: "register.css"});
            
        }
        }

    },
    profile: (req,res)=>{

    },
    edit: (req,res)=>{

    },
    update: (req,res)=>{

    },
    delete: (req,res)=>{
        
    },
}

module.exports = usersController;