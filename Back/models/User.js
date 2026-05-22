const mongoose=require("mongoose");
const UserSchema= new mongoose.Schema({
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

UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

const User=mongoose.model("User",UserSchema)
module.exports=User