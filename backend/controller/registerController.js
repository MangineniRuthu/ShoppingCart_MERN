const registerUser=require("../models/RegisterUser");

const postUser= async (req,res)=>{
    try{
        const {username,email,password,confirmpassword}=req.body;
        const exists= await registerUser.findOne({email})
        if(exists){
            res.status(400).send("User Already Exists")
        }
        if(password!==confirmpassword){
            res.status(400).send("Password Doesn't Match")
        }

        let newUser=new registerUser({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save();
        res.status(200).send("Registered Successfully");

    }catch(err){
        res.status(500).send("Internal Server Error")
    }
}
module.exports={postUser}
