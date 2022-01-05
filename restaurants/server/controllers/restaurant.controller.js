const { model } = require('mongoose');
const { on } = require('../models/restaurant.model');
const Restaurant = require('../models/restaurant.model');

module.exports.getAll = (req, res) => {
    console.log('Inside get all Function');
    Restaurant.find()
        .then((allRestaurants) => {
            console.log(allRestaurants);
            res.json(allRestaurants);
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })
};

module.exports.create = (req, res) => {
    console.log("Inside Create");
    console.log(req.body) // holds the json object that we will use to create
    Restaurant.create(req.body)
        .then((newRestaurant) => {
            console.log(newRestaurant)
            res.json(newRestaurant)
        })
        .catch((err) => {
            console.log(err);
            // change the response object status to 400 so the client can see the error
            // then send the error in json back to the client
            res.status(400).json(err);
        })
};

    // get a single restaurant
    model.exports.getOne = (req, res) => {
        console.log('Inside getOne');
        console.log(`Looking for ID: ${req.params.id}`);

        Restaurant.findById(req.params.id)
            .then((oneRestaurant) => {
                console.log(oneRestaurant);
                res.json(oneRestaurant)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    };

    // update a single restaurant
    // delete a single restaurant
