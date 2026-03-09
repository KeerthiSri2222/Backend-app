import express from "express";
import { showproduct } from "../controllers/productcontroller"; 
const productrouter=express.Router();
productrouter.get("/",showproduct)   

export {productrouter}