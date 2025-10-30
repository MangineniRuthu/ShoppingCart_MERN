const express=require("express");
const router=express.Router();
const {postUser}=require("../controller/registerController")

router.post('/', postUser);

module.exports=router;