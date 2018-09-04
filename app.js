var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect mongoose to mongodb
mongoose.connect("mongodb://localhost:27017/scootdb",{ useNewUrlParser: true } );



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));



//routes
app.get("/", function(req,res){
    res.render("index");
});

app.get("/contact", function(req,res){
    res.redirect("contact");
});

app.get("/about", function(req,res){
    res.redirect("about");
});

app.get("/login", function(req,res){
    res.redirect("login");
});

app.get("/newfaqs", function(req,res){
    res.redirect("newfaqs");
});

app.get("/payment", function(req,res){
    res.redirect("payment");
});

app.get("/pricing", function(req,res){
    res.redirect("pricing");
});

app.get("/signupform", function(req,res){
    res.redirect("contact");
});










//port
app.listen(3000,function(){
    console.log("Started on port 3000");
})