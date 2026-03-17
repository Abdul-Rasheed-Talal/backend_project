import mongoose from "mongoose";
import { app } from "./app.js";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import "dotenv/config";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed", error);
  });























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
