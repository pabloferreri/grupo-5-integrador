const fs = require('fs');
const path = require('path');
const { send } = require('process');

const {validationResult} = require("express-validator")


const userFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const UserModel = require('../models/User');


const usersController = {
    
    register:(req,res)=>{
        return res.render('users/register', {title : "Registrarse", stylesheet: "register.css"});
    },
    registrationProcess: (req,res)=>{
        
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', { 
                title : "Registrarse", 
                stylesheet: "register.css",
                errors: resultValidation.mapped(), 
                oldData: req.body
            })
        }
        
        let userFoundDb = UserModel.findByPk("email",req.body.email)
        

        if(req.body.password === req.body.passwordConfirmation){    
        
            UserModel.createUser(req.body,req.file)
            return res.redirect("/productos");

        }else{
                    
            return res.render('users/register', {title : "Registrarse", 
            stylesheet: "register.css",
            errors: {
                passwordConfirmation: {
                    msg: 'Las contaseñas ingresadas no coinciden.'
                }
            }, 
            oldData: req.body}); 
        }     
    },
    login:(req,res)=>{
        return res.render('users/login', {title : "Iniciar Sesión",stylesheet : "login.css"});
    },
    loginProcess: (req,res)=>{
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('users/Login', { 
                title : "Iniciar sesión", 
                stylesheet: "login.css",
                errors: resultValidation.mapped(), 
                oldData: req.body
            })
        }else{

            const userLogin = users.find(user => user.id == req.params.id);

            if (userLogin) {
                
            } else {
                
            }

            return res.render('users/profile', { 
                title : "Perfil", 
                stylesheet: "login.css",
            })
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