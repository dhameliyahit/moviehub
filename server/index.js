require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb.js");
const MovieRoute = require("./route/Movie.Route.js");
const UserRoute = require("./route/User.Route.js");
const morgan = require("morgan");


const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL 
connectDB(DB_URL)
const app = express();

// middleware's
app.use(express.json())
app.use(cors())
app.use(morgan())

// home route
app.get("/",(req,res)=>{
    res.end("<h1>Movie Hub !</h1>")
})

// api's
// ->for movie
app.use("/api/v1",MovieRoute)
// ->for user(admin's)
app.use("/api/v1/admin",UserRoute)




app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`);
})