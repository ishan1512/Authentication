import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error connecting to database", error.message)
        process.exit(1);
    }
}