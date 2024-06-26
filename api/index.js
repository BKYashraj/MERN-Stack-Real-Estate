import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

// to use the data of env file
dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  //if connection is successful then goes in .then part
  .then(()=>{
     console.log('Connected to MongoDB');
  })
  .catch((err)=>{
    console.log(err);
  });

const app = express();

// this is going to allow Json as the input of the server. 
app.use(express.json());

app.listen(3000, ()=> {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);



// create middleware for errors 
app.use((err,req,res,next) => {
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal server error"; 
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});