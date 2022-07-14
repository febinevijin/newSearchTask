import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

 const connectDB = async () =>{
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        
    }
}

export default connectDB;