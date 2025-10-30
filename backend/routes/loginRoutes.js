const express=require("express");
const router=express.Router();
const {loginPost}=require("../controller/loginController");

router.post("/",loginPost);

module.exports=router;