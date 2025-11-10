import express from 'express';
import dotenv from 'dotenv'
import connectDB from './src/config/db.js';
import errorHandlingMinddleware from './src/middleware/errorHandlingMinddleware.js';
import multer from 'multer';
import booKeepingRoute from './src/routes/booKeepingRoute.js';

const app = express();
const upload = multer();

dotenv.config({ path: ".env" })
await connectDB();

app.use(errorHandlingMinddleware);
app.use(express.json());
app.use(upload.array());
app.use(booKeepingRoute);

app.listen(process.env.PORT, () => {
    console.log(`The server is running on http://localhost:${process.env.PORT}`)
});