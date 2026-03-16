import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import 'dotenv/config';
connectDB()






















// just another method for connecting database but avoiding it as it's polluting the "main file"

/*
import express from "express";
const app = express();
( async ()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error" , (error)=>{
        console.log("ERROR" , error);
        throw error
        
      })

      app.listen(process.env.PORT , ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
      })

    } catch (error) {
        console.error("Error" , error)
        throw error
    }
})()
*/