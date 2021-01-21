const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static(publicPath))

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor corriendo en puerto 3000.');
})

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.post("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
})

app.post("/login", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
})

app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.post("/register", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.get("/product", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/product-list.html"));
})

app.post("/product", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/product-lis.html"));
})