const joi = require("joi")
const user = require("../models/User")
const loginSchema = require("./Validation/authValidiation")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { sign } = require("jsonwebtoken")
const login = async (req, res) => {
 try {
 const { error, value } = loginSchema.validate(req.body, {
 abortEarly: false,
 stripUnknown: true,
 })
 
 if (error) {
 return res.status(400).json({
 msg: error.details.map(err => err.message),
 })
 }
 const { name, email, passwored } = value;
 const exist = await user.findOne({ email })
 if (!exist) {
 return res.status(400).json({ msg: "user already exist" })
 }
 const match = await bcrypt.compare(passwored, exist.passwored)
 if (!match) {
 return res.status(400).json({ msg: "invaliad passwored " })
 }
 const token = jwt.sign({
 id: exist._id,
 role: exist.role

 },
 process.env.JWT_SK,

 {
 expiresIn: "1d"
 },
 );
 return res.status(200).json({
 msg: "Login successful",
 token,
 exist,
 })

 } catch (err) {
 res.status(500).json({ msg: "server errror " })
 }
}

const UpdatePassword= async (req,res)=>{
    const findUser = await user.findById(req.params.id);
    if(!findUser){
        res.state(404).json({Message:"the is not found"})
    }
    // change when bcryte function is added
    findUser.password = req.body.password;

    await findUser.save();

    res.status(200).json({
        Message:"User's Password was updated"
    })

}


 module.exports = {login, UpdatePassword}