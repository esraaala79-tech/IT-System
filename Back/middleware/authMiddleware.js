const jwt = require ("jsonwebtoken");
const authMiddleware=(req,res,next)=>{
const token=req.headers.authorizition.split("")[1];
if (!token) 
return res.status(401).json({massege:"not token"});
try {
 const decode =jwt.verify(token,process.env.SECRET_KEY);
 req.user=decode ;
 next();
} catch (error) {
 return res.status(401).json({message:"notvaildtoken"});
 
}

}
module.exports=authMiddleware;