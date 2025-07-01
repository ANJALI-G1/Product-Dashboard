import express from 'express';
import mongoose from 'mongoose';
import Product from "../models/product.model.js"
const router=express.Router();

import { createProduct, deleteProduct, getProducts, updateProduct } from '../controller/product.controller.js';


router.post("/",createProduct)

router.get("/",getProducts)

router.put("/:id",updateProduct)

router.delete("/:id",deleteProduct)


export default router;