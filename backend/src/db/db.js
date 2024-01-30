import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async()=>{
 try {
    const conn = await mongoose.connect(`${process.env.MongoDb_URL}/ ${DB_NAME}`)
    console.log(`mongoDb is connected!! Host: ${conn.Connection.host}`)
 } catch (error) {
    console.error(`Error ${error.message}`)
    process.exit(1)
 }   
}

export default connectDb;

// 