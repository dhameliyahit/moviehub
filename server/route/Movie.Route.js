const express = require("express");
const { addMovieController } = require("../controller/Movie.Controller");
const formidable = require('express-formidable');

const router = express.Router();

// add movie Route
router.post("/movie/add",formidable(),addMovieController);

//all movie read Route
router.get("/movie/all",AllMovieGetController)

module.exports = router