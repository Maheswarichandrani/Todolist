import express from 'express';
import connectDB from './config/dbConnection.js';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const PORT = 5000
connectDB();

//To convert into JSON objects
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',credentials: true
}))

app.use('/api/user',userRoutes);
app.use('/api/tasks',taskRoutes);

app.listen(PORT,()=>{
    console.log(`Server running at port: ${PORT}`)
})