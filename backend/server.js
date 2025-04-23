import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDb } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

const app = express();
const __dirname = path.resolve();

app.use(cors({origin: "http://localhost:5173", credentials:true}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

const PORT=process.env.PORT || 5001
app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running on port:${PORT}`)
})