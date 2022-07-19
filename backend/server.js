import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import dataRoutes from './routes/dataRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'


const app = express()
app.use(cookieParser());
app.use(express.json({limit: '50mb'}))


dotenv.config();
connectDB();

const corsOptions = {
    origin: 'http://localhost:3000',
  
    credentials: true, 
  }
app.use(cors(corsOptions));



app.use('/api/data', dataRoutes)
app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(4000, console.log('server is connected at port 4000'))