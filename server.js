/*
const http = require('http')
const port = 3014
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':"text/plain"})
    res.end("I love to eat pizza and icecream \nI love to play")
   
})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
*/
/*

const connect = require('connect')
const http = require('http')
const app = connect()

function firstFunction(req,res,next){
    console.log("This is the first function")
    
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("This is the login page\nPlease subscribe")
    res.end()
    next()

}

function secondFunction(req,res,next){
    console.log("This is the second function")
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("This is the profile page\nI am Ariel")
    res.end()
    next()
    
}

app.use("/login",firstFunction)
app.use("/profile",secondFunction)



http.createServer(app).listen(8090)
console.log('server is running...')

//---------------------------------------------------------------------

const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
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

server.listen(8060,(error)=>{
    if(error){
        console.log("something went wrong")
    }
    else{
        console.log("server is running")
    }
})
*/
//---------------------------------------------------------------------

const connect = require('connect')
const http = require('http')
const app = connect()
const fs = require("fs")

function firstFunction(req,res,next){
    console.log("This is the first function")
    res.writeHead(200,{"Content-Type":"text/html"})
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
        next()
    })
}

function secondFunction(req,res,next){
    console.log("This is the second function")
    res.writeHead(200,{"Content-Type":"text/html"})
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
        next()
    })
    
}

app.use("/login",firstFunction)
app.use("/profile",secondFunction)

http.createServer(app).listen(8090)
console.log('server is running...')