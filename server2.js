const express = require('express')
const app = express()

app.use('/',function(req,res){
    res.send("Hello World 2")
})

app.listen(3001)
console.log('server running at http:localhost:3001/')
module.exports = app;

