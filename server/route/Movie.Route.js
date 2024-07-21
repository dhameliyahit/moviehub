const express = require("express");
const { addMovieController, AllMovieGetController, getSingleMovieController, getMoviePosterController, UpdateMovieController, deleteMovieController } = require("../controller/Movie.Controller");
const formidable = require('express-formidable');

const router = express.Router();

// add movie Route
router.post("/movie/add",formidable(),addMovieController);

//all movie read Route
router.get("/movie/all",AllMovieGetController);

// single movie get route
router.get("/movie/single/:id",getSingleMovieController);

// get movie poster
router.get("/movie/poster/:pid",getMoviePosterController);

// update movie Route
router.patch("/movie/update/:uid",UpdateMovieController);

// delete movie Route
router.delete("/movie/delete/:id",deleteMovieController);

module.exports = router