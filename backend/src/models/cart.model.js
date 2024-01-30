import mongoose ,{Schema}from "mongoose";

const cartSchema =  new Schema({
    item:[
        {
            type: Schema.Types.ObjectId,
            ref:Product,
        }
    ],

    quantity:{
        type: Number,
    },

});

export const Cart = mongoose.model("Cart",cartSchema);

