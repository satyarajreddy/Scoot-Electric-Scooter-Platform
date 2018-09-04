var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Rider = require("./models/rider");
//connect mongoose to mongodb
mongoose.connect("mongodb://localhost:27017/scootdb",{ useNewUrlParser: true } );


//auth
app.use(require("express-session")({
    secret:"Hello World",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Rider.authenticate()));
passport.serializeUser(Rider.serializeUser());
passport.deserializeUser(Rider.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));



//routes
app.get("/", function(req,res){
    res.render("index");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/newfaqs", function(req,res){
    res.render("newfaqs");
});

app.get("/payment", function(req,res){
    res.render("payment");
});

app.get("/pricing", function(req,res){
    res.render("pricing");
});

app.get("/register", function(req,res){
    res.render("register");
});

app.get("/pricing", function(req,res){
    res.render("pricing");
});

app.get("/payment", function(req,res){
    res.render("payment");
});

app.get("/faq", function(req,res){
    res.render("faq");
});




//register route
app.post("/register", function(req,res){
    var newRider = new Rider({username:req.body.username});
    Rider.register(newRider , req.body.password, function(err,user){
        if(err){
            console.log(err);
            res.redirect("register");
        }else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/");
            })
        }
    })
});

app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login", passport.authenticate("local",
{
    successRedirect: "/",
    failureRedirect:"/login"
}),  function(req,res){
    // empty callback no need
});

//logout
app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/campgrounds");
});





//port
app.listen(3000,function(){
    console.log("Started on port 3000");
})