const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    MovieName:{
        type:String,
        require:true,
        unique: true
    },
    MovieDesc:{
        type:String,
        require:true
    },
    MoviePoster:{
        data:Buffer,
        contentType:String,
    },
    imdb:{
        type:String,
        require:true
    },
    link480p:{
        type:String,
        require:true,
    },
    link720p:{
        type:String,
        require:true,
    }
})

const movieModel = mongoose.model("movie",MovieSchema);

module.exports = movieModel;