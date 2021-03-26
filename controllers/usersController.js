const fs = require('fs');
const path = require('path');
const { send } = require('process');
const bcryptjs = require('bcryptjs')

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
        
        const userToSave = {
			"id": maxId,
			"name": req.body.name,
            "lastName": req.body.lastname,
			"email":req.body.email,
			"phone":req.body.phone,
			"password":bcryptjs.hashSync(req.body.password, 10),
			"image": req.file.filename
		}

		console.log(req.body)

		users.push(userToSave);
		let userJson=JSON.stringify(users,null,2)

		fs.writeFileSync("./data/usersDataBase.json",userJson)

		return res.redirect("/productos")	
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