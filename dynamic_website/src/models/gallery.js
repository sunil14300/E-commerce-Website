const mongoose=require('mongoose');
 const gallery=mongoose.Schema({
    img:String
 })

 module.exports=mongoose.model("Gallery",gallery);
 