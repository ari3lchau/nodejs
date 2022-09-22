// create a port
const express = require("express")
const app = express()
const port = 4000
//liesten on port 3000

//Static file 
app.use(express.static('public'))
//app.use('/css',express.static(__dirname + 'public/css'))
//app.use('/js',express.static(__dirname + 'public/js'))
//app.use('/img',express.static(__dirname + 'public/img'))

//set views
app.set("views", './views')
app.set('view engine','ejs')



app.get("",(req,res)=>{  
    //res.sendFile(__dirname + '/views/index.html')
   //res.send("Hello")
   //res.render('index')
   //use ejs template
   res.render('index',{text: 'this is text' })
})

app.get("/about",(req,res)=>{  
   res.render('about',{text: 'About page' })
})
app.get("/index",(req,res)=>{  
    res.render('index',{text: 'this is text' })
})

app.get("/contact",(req,res)=>{  
    res.render('contact',{text: 'this is text' })
})




app.listen(port,function(req,res){ 
    console.log("Listening on port " + port)
})