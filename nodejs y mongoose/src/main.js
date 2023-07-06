import express from "express";
import mongoose from "mongoose";
import {router} from "./routes/auth.route.js"

const mconnect = process.env.mconnect;

const app = express();
mongoose.connect(mconnect);

app.use(express.json());

app.use('/',router);

app.get((req,res,next)=>{
  res.status(404).send('not found')
})

app.listen(3000,()=>{
  console.log(`listen on http://localhost:${3000}`);
})