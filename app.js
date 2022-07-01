const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require('hbs'); 
app.use('/public', express.static('public')); 
app.set('view engine', 'hbs');

const partials_path = path.join(__dirname, 'templates/partials')

app.set('views', path.join(__dirname, 'templates/views')); 
hbs.registerPartials(partials_path);

//routing
app.get("/", (req,res)=>{
          res.render('index');
      }); 
app.get("/about", (req,res)=>{
        res.render('about');
    });     
app.get("/weather", (req,res)=>{
        res.render('weather');
    });
app.get("*", (req,res)=>{
        res.render('404error');
    });    
app.listen(port, ()=>{
        console.log(`The application started successfully on port ${port}`);
    });     