import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// mongodb+srv://kumarvishal22665_db_user:C5wuGQ3tE6biJ8gp@cluster0.c6jfzgw.mongodb.net/?appName=Cluster0

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const app = express();


app.listen(3000, () => {
  console.log('API server is running on http://localhost:3000');
});

