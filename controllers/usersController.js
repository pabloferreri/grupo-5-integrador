const fs = require('fs');
const path = require('path');
const { send } = require('process');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

const {validationResult} = require("express-validator")


// const userFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
// const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

/* const UserModel = require('../models/User'); */
const { userInfo } = require('os');
const db = require('../database/models');
const User = db.User;
const City = db.City;


const usersController = {
    
    register: async (req,res)=>{
        let city = await City.findAll();
        return res.render('users/register', {title : "Registrarse", stylesheet: "register.css",city: city});
    },
    registrationProcess: async(req,res)=>{

        
        
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', { 
                title : "Registrarse", 
                stylesheet: "register.css",
                errors: resultValidation.mapped(), 
                oldData: req.body
            })
        }


        let createdUser = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(createdUser){
            return res.render('users/register', {title : "Registrarse", 
            stylesheet: "register.css",
            errors: {
                email: {
                    msg: 'Este mail ya esta registrado.'
                }
            }, 
            oldData: req.body}); 
        }
        

        if(req.body.password === req.body.passwordConfirmation){    

            const passwordPlainText = req.body.password;
            const passwordHash = bcryptjs.hashSync(passwordPlainText, 10);
            
            let user = {
                ...req.body,
                "password": passwordHash,
                "avatar": req.file.filename
            }
            await User.create(user);
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

            let userFoundDb = UserModel.findByField("email",req.body.email)
           

            if (userFoundDb) {

                let correctPassword = bcryptjs.compareSync(req.body.password, userFoundDb.password);
                if(correctPassword){
                    delete userFoundDb.password;
                    req.session.userLogged = userFoundDb;
                    
                    return res.render('users/profile', { 
                        title : "Perfil", 
                        stylesheet: "profile.css",
                        user: req.session.userLogged
                    })
                }else{
                    return res.render('users/Login', { 
                        title : "Iniciar sesión", 
                        stylesheet: "login.css",
                        errors: {
                            password: {
                                msg: 'El usuario o la contraseña son incorrectas.'
                            }
                        }, 
                        oldData: req.body}); 
                }
                

                
            } else {
                return res.render('users/Login', { 
                title : "Iniciar sesión", 
                stylesheet: "login.css",
                errors: {
                    password: {
                        msg: 'El usuario o la contraseña son incorrectas.'
                    }
                }, 
                oldData: req.body}); 
            }
        }
    },
    profile: (req,res)=>{
        return res.render('users/profile', { 
            title : "Perfil", 
            stylesheet: "profile.css",
            user: req.session.userLogged
        })
    },
    edit: (req,res)=>{

    },
    update: (req,res)=>{

    },
    delete: (req,res)=>{
        
    },
    logout:(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;