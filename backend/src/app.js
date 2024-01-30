import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./db/db";


const app = express();
connectDb();



app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})
