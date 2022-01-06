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
module.exports.getOne = (req, res) => {
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
// we will need the ID and the data to update an existing document
module.exports.update = (req, res) => {
    console.log("Inside update");
    console.log(`Looking for ID: ${req.params.id}`);
    console.log(req.body);

    Restaurant.findByIdAndUpdate(req.params.id, req.body, {
        new: true,   // return the updated object
        runValidators: true,    // use the same validation that was used for create
    })
        .then((updatedRestaurant) => {
            console.log(updatedRestaurant);
            res.json(updatedRestaurant);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

// delete a single restaurant
module.exports.delete = (req, res) => {
    console.log("Inside delete");
    console.log(`Looking for ID: ${req.params.id}`);

    Restaurant.findByIdAndDelete(req.params.id)
        .then((deletedRestaurant) => {
            // we get the data back as a last chance to keep it.
            // You don't need to do anything if you don't want to.
            console.log(deletedRestaurant);
            res.json(deletedRestaurant);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};