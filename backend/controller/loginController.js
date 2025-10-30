const jwt=require("jsonwebtoken");
const RegisterUser = require("../models/RegisterUser");

const loginPost= async (req,res)=>{
    const {email,password}=req.body;
    const exist= await RegisterUser.findOne({email});
    if(!exist){
        return res.status(400).send("Email doesn't exist")
    }
    if(exist.password!==password){
        return res.status(400).send("Invalid Credentials")
    }

    const payload={
        user:{
            id:exist.id
        }
    }

  jwt.sign(payload,"jwtSecret",{expiresIn:3600000},
    (err,token)=>{
      if(err) throw err;
      return res.json({token})
  })
}

module.exports={loginPost};