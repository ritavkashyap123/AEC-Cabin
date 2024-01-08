import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"




const app = express()
dotenv.config()



const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.mongourl)
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err){
        console.log(err)
    }
}


connectdb()
app.use(express.json())


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})
