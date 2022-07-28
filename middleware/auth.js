const dB=require("../models/index");
const User=dB.users;
const secret="zxtzxtzxtzxtzxt"
const jwt=require("jsonwebtoken")

exports.authMiddleware=async (req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization)
    {
        return res.status(400).json({message:"Invalid"})
    }
    const token=authorization.replace("Bearer ","")
    await jwt.verify(token,secret,(err,payload)=>{
        if(err)
        {
            return res.status(400).json({message:"Invlaid"})
        }
        const {id}=payload
        const user=User.findOne({id})
        user.password=undefined;
        req.user=user
        next();
    });

}