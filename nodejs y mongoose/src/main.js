import express from "express";
import mongoose from "mongoose";
import {router} from "./routes/auth.route.js"

const app = express();
mongoose.connect("mongodb+srv://Alejandro:11232628@cluster0.p6g5lfh.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json());

app.use('/',router);

app.get((req,res,next)=>{
  res.status(404).send('not found')
})

app.listen(3000,()=>{
  console.log(`listen on http://localhost:${3000}`);
})