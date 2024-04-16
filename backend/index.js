import express from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const app = express();

app.listen(process.env.PORT ||8000,()=>{
    console.log("server is running");
}
    )
