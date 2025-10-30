const registerUser=require("../models/RegisterUser");

const middlewareAuth= async(req,res)=>{
    try{
        const exist=await registerUser.findById(req.user.id);
        if(!exist){
            return res.status(400).send("User Not Found");
        }
        res.json(exist);

    }catch(err){
        return res.status(500).send("Token Invalid")
    }
    
}

module.exports={middlewareAuth};