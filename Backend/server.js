import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import Router from './Routes/portfolioroutes.js'
import path from "path"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

const __dirname=path.resolve();

app.use("/",Router)

if(process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname,"/Frontend/dist")))

  app.get("*",(req,res)=>{
         res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"))
  })
}

const PORT= process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log("The port is connected successfully")
})

