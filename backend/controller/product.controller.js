import Product from "../models/product.model.js";

import mongoose from "mongoose";

export const getProducts= async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get Products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct=async (req ,res)=>{
    const product=req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success:false,
            message:"Please provide all fields"
        });
    }

    const newProduct=new Product
    (product);

    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    } catch(error){
        console.log("Error in Create Product:",error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export const updateProduct=async(req,res)=>{
    const {id}=req.params;
    const product=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"});
    }
    try{
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    }
    catch(error){
        res.status(500).json({success:false,message:"server error"});
    }

}

export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    console.log("id :",{id});
    try{
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({
                success:false,
                message:`Product with ID ${id} not found`
            });
        }
         res.status(200).json({success:true,message:`Product ${id} deleted.`});
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:`Error in deletion  ${error.message}`
        });
    }
   
}