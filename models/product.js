import mongoose from "mongoose";

const productScema = new mongoose.Schema({
    key: {
        type :String,
        required : true,
        unique: true
     },
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
     dimentions: {
        type :String,
        required : true,
     },
     
     category: {
        type :String,
        required : true,
        default : "uncategorized"
     },
     availability: {
        type :Boolean,
        required : true,
        default : true
     },
     image: {
        type: [String],
        required: true,
        default: ["https://vectorified.com/images/default-user-icon-33.jpg"]
        
     }
})

const Product = mongoose.model("Product",productScema);

export default Product;