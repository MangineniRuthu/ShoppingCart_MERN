require("dotenv").config();
const express=require('express');
const connectDB=require('./config/db.js');
const productRoutes =require('./routes/productRoutes');
const registerRoutes=require("./routes/registerRoutes");
const loginRoutes=require("./routes/loginRoutes.js")
const cors = require("cors");
const middlewareRoutes=require("./routes/middlewareRoutes.js")

connectDB();
const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/api/products",productRoutes);
app.use("/register",registerRoutes);
app.use("/login",loginRoutes)
app.use("/admin",middlewareRoutes)
const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));