const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

price:{
type:Number,
required:true
},

offerPrice:{
type:Number,
default:0
},

category:{
type:String,
required:true
},

description:{
type:String,
default:""
},

image:{
type:String
}

},{
timestamps:true
});

module.exports = mongoose.model("Food",foodSchema);