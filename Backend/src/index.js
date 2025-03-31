import cors from 'cors';
import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRouter from '../src/routers/apiRoutes.js'

const app=express();

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/ping',(req,res)=>{
    return res.json({message:"Server is alive"})
})

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    connectDB();
})