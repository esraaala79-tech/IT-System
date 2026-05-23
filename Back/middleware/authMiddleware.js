const jwt = require ("jsonwebtoken");
const authMiddleware=(req,res,next)=>{
const token=req.headers.authorization .split(" ")[1];
if (!token) 
return res.status(401).json({massege:"not token"});
try {
 const decode =jwt.verify(token,process.env.JWT_SK);
 req.user=decode ;
 next();
} catch (error) {
 return res.status(401).json({message:"notvaildtoken"});
 
}

}
module.exports=authMiddleware;