// const express = require("express")
import express from "express";

import authRoutes from "./routes/auth.route.js"; //I have give name authRoute to the router exported from auth.route.js
import messageRoutes from "./routes/message.route.js"; 

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import {app, server} from "./lib/socket.js"

dotenv.config(); //is used to load environment variables from a .env file into your Node.js application.
// const app = express();



const PORT = process.env.PORT || 5001;
// app.use(express.json()) //extract in json form from db
app.use(express.json({ limit: '5mb' })) // or '10mb' if needed
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

//routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

//debug
app.get("/", (req, res) => {
  res.send("Socket server is up ✅");
});


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})