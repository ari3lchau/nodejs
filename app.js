/*
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Hello World")
})
app.get("/alien",function(req,res){
    res.send("Welcome Back alien")
})
app.get('/alien/:id',function(req,res){
    const id = req.params.id;
    res.send(`Hello alien ${id}`)
})
app.listen(9000,function(req,res){  
    console.log("Running")
});
*/
//----------------


const fs = require("fs")
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Hello World")
})

app.get("/login",function(req,res){
    res.status(200);
    fs.readFile('index.html',function(err,data){
        if(err){
            res.writeHead(404)
            res.write("Error, File not found")
        }
        else{
            console.log('read html')
            res.write(data)
        }
        res.end()
        
        
    })
})

app.get("/profile",function(req,res){
    res.status(200);
    fs.readFile('profile.html',function(err,data){
        if(err){
            res.writeHead(404)
            res.write("Error, File not found")
        }
        else{
            console.log('read html')
            res.write(data)
        }
        res.end()
        
    })
})


app.listen(9000,function(req,res){  
    console.log("Running")
});