var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var riderSchema = new mongoose.Schema({
    username:String,
    password:String
});

riderSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Rider", riderSchema);