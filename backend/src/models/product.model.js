import mongoose ,{Schema}from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        indexed :true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number
    },
    image:{
        type: String, // cloudinary url
        required: true,
    },
    
});

export const Product = mongoose.model("Product",productSchema);
