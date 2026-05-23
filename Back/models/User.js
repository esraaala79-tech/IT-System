const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
name:{
 type:String,
 required:true,
 trim:true
},
email:{
 type:String,
 required:true,
 unique:true

},
password:{
 type:String,
 required:true,

},
role:{
    type:String,
 enum:["admin","user"],
 default:"user"
}
},{timestamp:true}
)
const User=mongoose.model("User",UserSchema)
module.exports=User