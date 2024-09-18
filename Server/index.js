import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import Property from './models/property.js';
import Booking from './models/booking.js';
import Review from './models/review.js';
import Payment from './models/payment.js';


const app = express();
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:5173"}));
mongoose.connect(process.env.connectionString);

app.listen(process.env.Port,(req,res)=>{
    console.log(`Server is running on port ${process.env.Port}`);
});