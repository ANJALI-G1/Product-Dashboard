
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import dotenv from 'dotenv'
import path from 'path'
dotenv.config();

const app=express();
app.use(express.json()); //allow to use json.body

const PORT=process.env.PORT || 5000;


const __dirname=path.resolve();

//making post request
app.use("/api/products",productRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}
app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at http://localhost:${PORT}`);
})

