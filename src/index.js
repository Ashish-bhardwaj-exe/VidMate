// import mongoose, { mongo } from "mongoose";
// require('dotenv').config()
// import 'dotenv/config'
import dotenv from "dotenv"
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDB()


// import express from "express";
// const app=express()
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${proces.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("error :",error);
//     }
// })()