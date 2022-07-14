import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import dataRoutes from './routes/dataRoutes.js'

const app = express()
app.use(express.json({limit: '50mb'}))

dotenv.config();
connectDB();
app.use(cors());

app.use(express.static(path.join(__dirname, "/fronend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/fronend/build', 'index.html'));
});

app.get("/", (req, res) => {
    
    res.send("API is running...");
});

app.use('/api/data', dataRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(4000, console.log('server is connected at port 4000'))