const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName:{type:String,require:true},
    email:{type:String,require:true},
    Password:{type:String,require:true}
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = UserModel;