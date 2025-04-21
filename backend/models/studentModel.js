const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{type:String,required:true},
    grade:{type:String,required:true},
    image:{type:String},
    email:{type:String,required:true}
})

const studentModel = mongoose.model("students",schema);

const name = "kushal"

module.exports = [studentModel,name];
