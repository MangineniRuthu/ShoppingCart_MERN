const express=require("express");
const middleware = require("../middleware");
const {middlewareAuth}=require("../controller/middlewareController")
const router=express.Router();

router.get("/",middleware,middlewareAuth);

module.exports=router;