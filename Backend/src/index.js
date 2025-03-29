import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';

const app=express();


app.get('/ping',(req,res)=>{
    return res.json({message:"Server is alive"})
})

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    connectDB();
})