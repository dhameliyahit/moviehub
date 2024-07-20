const movieModel = require("../model/MovieModel.js");
const fs = require("fs")


// movie add controller..
const addMovieController = async(req,res)=>{
    const {MovieName,MovieDesc,imdb,link480p,link720p} = req.fields;
    const {MoviePoster} = req.files;
    const movie = movieModel({
        MovieName,MovieDesc,imdb,link480p,link720p,MoviePoster
    })
    
    if(MoviePoster){
        movie.MoviePoster.data = fs.readFileSync(MoviePoster.path)
        movie.MoviePoster.contentType = MoviePoster.type
    }

    await movie.save()

    try {
        res.status(200).send({
            success:true,
            message:"Movie Add successfully",
            movie
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error while add movie !",
            error
        })
    }
}

const AllMovieGetController = async(req,res) =>{
    const movie = movieModel.find({}).select("-MoviePoster");

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while get Movie",
            error
        })
    }

}



module.exports = {
    addMovieController,
    AllMovieGetController
}


