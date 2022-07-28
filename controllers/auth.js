const { JsonWebTokenError } = require("jsonwebtoken");
const db = require("../models");
const User =  db.users;
const secret="zxtzxtzxtzxtzxt"
const jwt=require("jsonwebtoken")

const register_user = async (req,res) => {
    try {
        const new_user = await User.create({
            user_name : req.body.user_name,
            email_id : req.body.email_id,
            password : req.body.password
        });
        res.status(200).send(new_user);
    }
    catch(err) {
        console.log(err);
    }
};

const login_user = async (req,res) => {
    try {
        const user_name  = req.body.user_name;
        const password = req.body.password;
        const find_user = await User.findOne({
             where : {
                    user_name  : user_name,
                    password : password
                    }
         });
         if(find_user) {
            const token=await jwt.sign({user_name,password},secret)       
            res.status(200).json({data:token,message:"Login succesfull !"});
         }
         else {
            res.status(404).send({message : "Incorrect username or password "});
         }
    }
    catch(err)
    {
        console.log(err);
    }
};



module.exports = {register_user,login_user};