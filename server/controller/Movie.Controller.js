const { error } = require("console");
const movieModel = require("../model/MovieModel.js");
const fs = require("fs")


// movie add controller..
const addMovieController = async(req,res)=>{
    const {MovieName,MovieDesc,imdb,link480p,link720p} = req.fields;
    const {MoviePoster} = req.files;
    const movie =new movieModel({
        MovieName,
        MovieDesc,
        imdb,
        link480p,
        link720p 
    })

    if(MoviePoster >=100000){
        res.send("Poster must be less than 1MB")
    }
    if(MoviePoster){
        movie.MoviePoster.data = fs.readFileSync(MoviePoster.path)
        movie.MoviePoster.contentType = MoviePoster.type
    }

    
    try {
        await movie.save()
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

// all movie route
const AllMovieGetController = async(req,res) =>{
    const movie = await movieModel.find({}).select("-MoviePoster");
    
    try {
        res.status(200).send({
            success:true,
            message:"successfully get All Movie's",
            movie
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while get Movie",
            error
        })
    }

}

// single movie get route
const getSingleMovieController = async(req,res)=>{
    const id = req.params
    const movie = await movieModel.findById(id.id).select("-MoviePoster");
    try {
        res.status(200).send({
            success:true,
            message:"Successfully get single Movie",
            movie 
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error while Get single Movie",
            error
        })
    }

}

// get movie poster route
const getMoviePosterController = async(req,res)=>{
    try {
        const pid = req.params;
        const poster = await movieModel.findById(pid.pid).select("MoviePoster");
        if (poster && poster.MoviePoster && poster.MoviePoster.data) {
            res.set('Content-Type', poster.MoviePoster.contentType); // Set content type
            return res.status(200).send(poster.MoviePoster.data); // Send the image data
        } else {
            return res.status(404).send({
              success: false,
              message: "Movie Poster not found",
            });
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({
          success: false,
          message: "Error while fetching Movie Poster",
        });
    }

}  

const UpdateMovieController = async(req,res)=>{
    const uid = req.params;
    const updatedMovie = await movieModel.findByIdAndUpdate(uid.uid,req.body);

    try {
        res.status(200).send({
            success:true,
            message:"Successfully Movie Updated!",
            updatedMovie
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error while update Movie",
            error
        })
    }
} 

const deleteMovieController = async(req,res)=>{
    const id = req.params;
    const movie = await movieModel.findByIdAndDelete(id.id);

    try {
        res.status(200).send({
            success:true,
            message:"Movie Delete Successfully",
            movie
        });
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error while Movie Delete",
            error
        });
    }
}


module.exports = {
    addMovieController,
    AllMovieGetController,
    getSingleMovieController,
    getMoviePosterController,
    UpdateMovieController,
    deleteMovieController
}


