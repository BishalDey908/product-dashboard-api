const jwt = require("jsonwebtoken")
const ensureAuthenticated = async(req,res,next)=>{
     const authHeader = req.headers["authorization"]
     if(!authHeader){
        return res.status(401)
        .json({message:"Unauthorized"})
     }
     try{
        //check valid jwt token
        const decoted = jwt.verify(authHeader,process.env.JWT_SECRET)
        req.userInfo = decoted
        console.log(decoted)
        if(!decoted){
            return res.status(401)
            .json({message:"token is not correct or expired"})
        }
        next()
     }catch(err){
        return res.status(401)
        .json({message:"token is not correct or expired"})
     }
}

module.exports = ensureAuthenticated