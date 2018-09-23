var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var passportLocalMongoose = require("passport-local-mongoose");

var riderSchema = new mongoose.Schema({
    username:String,
    password:String,
    email: { type: String, unique: true, required: true },
    aadhar: { type: Number, index: true, unique: true, required: true },
    bday:Date,
    gender:String


});

riderSchema.plugin(uniqueValidator);
riderSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Rider", riderSchema);