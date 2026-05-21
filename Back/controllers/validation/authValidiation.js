const joi =require("joi")


const loginSchema=joi.object({
 name:joi.string().min(3).max(20),
 email:joi.string().email().required(),
 passwored:joi.string().required(),
})