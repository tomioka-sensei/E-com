import mongoose ,{Schema}from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username :{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    _id:{

        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    },
    avatar:{
        type:String,
        required:true,
    },

});



userSchema.pre(("save"), async function(next){
    if(this.isModified("password")){
  this.password = bcrypt.hash(this.password,10)
  next()
}
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        username :this.username,
        email: this.email,
    },
    
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    
    )
}

userSchema.methods.generateRefToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    
    )
}


export const User = mongoose.model("User", userSchema);

