import express from "express";
import cors from 'cors'
import { connectDB } from './db.js'
import {stockRoute} from './route/route.stock.js'
const app=express();
app.use(express.json())
app.use(cors())
connectDB()

app.use("/",stockRoute)

app.listen(8080,()=>{
    console.log("hiii")
})