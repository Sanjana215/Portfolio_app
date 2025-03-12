import express from "express"
import { handleEmail } from "../Controllers/portfoliocontroller.js"
const Router=express.Router()

Router.post("/sendemail",handleEmail)

export default Router;