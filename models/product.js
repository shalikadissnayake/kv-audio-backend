import mongoose from "mongoose";

const productScema = new mongoose.Schema({
    name: {
        type :String,
        required : true,
        
     },
     price :{
         type :Number,
         required : true
         
     },
     description :{
         type :String,
         required : true,
         
     },
})

const Product = mongoose.model("Product",productScema);

export default Product;