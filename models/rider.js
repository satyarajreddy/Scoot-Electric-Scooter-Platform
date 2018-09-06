var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var riderSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    aadhar:Number,
    dob:Number,
    month:Number,
    year:Number,
    gender:String


});

riderSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Rider", riderSchema);