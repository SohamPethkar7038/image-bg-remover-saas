import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'

// app congfig

const PORT=process.env.PORT || 4000

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