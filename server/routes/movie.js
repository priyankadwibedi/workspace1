var Movie = require('../model/movieModel');
var express = require('express');
var mongoose=require('mongoose');

//configure routes

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        Movie.find(function(err, movies) {
            if (err)
                res.send(err);
            res.json(movies);
        });
    })
    .post(function(req, res) {
        var movie = new Movie(req.body);
        movie.ImdbID=req.body.Title;
        movie.Poster=req.body.Poster;
        movie.Title=req.body.Title;
        movie.Year=req.body.Year;
        movie.save(function(err) {
            if (err)
                res.send(err);
            res.send({
                message: 'Movie Added'
            });
        });
    });

router.route('/:id')
    .put(function(req, res) {
        Movie.findOne({
            _id: req.params.id
        }, function(err, movie) {

            if (err)
                res.send(err);

            for (prop in req.body) {
                movie[prop] = req.body[prop];

            }

            // save the movie
            movie.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Movie updated!'
                });
            });

        });
    })
    .get(function(req, res) {
        Movie.findOne({
            _id: req.params.id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json(movie);
        });
    })
    .delete(function(req, res) {
        Movie.remove({
            _id: req.params.id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({
                message: 'Successfully deleted'
            });
        });
    });

module.exports = router;
