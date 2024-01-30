import dotenv from "dotenv";
import express from "express"
import connectDb from "./db/db.js";

dotenv.config({
    path: "./env"
})

const app = express();

connectDb();



app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})
