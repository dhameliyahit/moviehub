require("dotenv").config();
const express = require("express");
const cros = require("cors")
const connectDB = require("./config/connectdb.js")

const PORT = process.env.PORT || 8000;

const DB_URL = process.env.DB_URL 
connectDB(DB_URL)
const app = express();

// home route
app.get("/",(req,res)=>{
    res.end("<h1>Movie Hub !</h1>")
})


// middleware's
app.use(express.json())
app.use(cros())



app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`);
})