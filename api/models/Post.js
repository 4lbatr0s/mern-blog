const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false
    },
    type:String, 
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }
}, {timestamps:true}) //it follows the UpdatedAt and CreatedAt dates!


module.exports = mongoose.model("Post", PostSchema);