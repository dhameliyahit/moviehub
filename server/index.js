require("dotenv").config();
const express = require("express");
const cros = require("cors")
const connectDB = require("./config/connectdb.js")
const MovieRoute = require("./route/Movie.Route.js")


const PORT = process.env.PORT || 8000;

const DB_URL = process.env.DB_URL 
connectDB(DB_URL)
const app = express();

// middleware's
app.use(express.json())
app.use(cros())

// home route
app.get("/",(req,res)=>{
    res.end("<h1>Movie Hub !</h1>")
})

// api's
app.use("/api/v1",MovieRoute)





app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`);
})