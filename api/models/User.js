const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String, //url
        default:"" //if there is not any profile pict url, then empty.
    },
}, {timestamps:true}) //it follows the UpdatedAt and CreatedAt dates!


module.exports = mongoose.model("User", UserSchema);