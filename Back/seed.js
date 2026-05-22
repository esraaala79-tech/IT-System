const mongoose =require ("mongoose");
const bcrypt =require("bcrypt");
const user =require("../models/User")
require("dotenv").config();
 
const seedAdmin=async(req,res)=>{
await mongoose.connect(process.env.MONGO_URL);
const exist = await user.findOne({role:"admain"});
if (exist){
console.log("admain is exicted");
process.exist();
}
const hashedpassward=await bcrypt("hageradmin",10);
const creatAdmain=await user.create({
name:"hager",
passward:hashedpassward,
email:"hageradmin@test.com",
role:"admain"
});
console.log("admin created");
};
seedAdmin();