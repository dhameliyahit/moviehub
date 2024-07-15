const mongoose = require("mongoose")


const connectDB = async(DB_URL)=>{
    try {
        await mongoose.connect(DB_URL)
        console.log("Database connect Successfully👍");
    } catch (error) {
        console.log(error);
        console.log("error white connect to database !")
    }
}

module.exports = connectDB