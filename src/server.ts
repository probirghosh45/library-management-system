import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import config from "./config";
import routes from "./modules/routes";



const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173', '***']
   })
);
app.use(express.json())
app.use(routes)


app.get("/",(req,res)=>{
    res.send({
        success : true, 
        message : "This is library management system project" 
    })
})

const port = config.port || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

async function server(){
    try {
        // console.log(config)
        await mongoose.connect(config.database_url!)
        console.log("Connected to Database")
    } catch (error) {
        console.log(`Server error ${server}`)
    }
}

server()
