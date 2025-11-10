import express from 'express';
import dotenv from 'dotenv'
import connectDB from './src/config/db.js';

const app = express();
dotenv.config({path:".env"})
await connectDB();


app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on http://localhost:${process.env.PORT}`)
});