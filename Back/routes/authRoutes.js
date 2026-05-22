const express=require("express")
const {login, UpdatePassword}=require("../controllers/authController")
const router=express.Router()



router.post("/login",login)

router.post("ChangePassword",UpdatePassword)


module.exports=router




