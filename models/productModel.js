import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    imageUrl: { type: String },
});

const productModel = mongoose.model("Products", productSchema);
export default productModel;


// const productModel=[
//     {
//         id:1,name:"product1",price:100},
//         {id:2,name:"product2",price:200},
//         {id:3,name:"product3",price:300}
// ]
