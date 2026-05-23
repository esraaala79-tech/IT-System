const mongoose =require ("mongoose");
const bcrypt =require("bcrypt");
const user =require("./models/User")
require("dotenv").config();
 
const seedAdmin=async(req,res)=>{
await mongoose.connect(process.env.DB_URL);
const exist = await user.findOne({role:"admain"});
if (exist){
console.log("admain is exicted");
process.exit();
}
const hashedpassward=await bcrypt.hash("hageradmin",10);
const creatAdmain=await user.create({
name:"hager",
password :hashedpassward,
email:"hageradmin@test.com",
role:"admin"
});
console.log("admin created");
};
seedAdmin();