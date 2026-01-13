import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from './configs/Database.js'

// app congfig

const PORT=process.env.PORT || 4000
dotenv.config();
const app=express()






// initialize middlewares

app.use(express.json());
app.use(cors())

// api routes

app.get('/',(req,res)=>{
    res.send("started backend for bg removal");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

await connectDB()