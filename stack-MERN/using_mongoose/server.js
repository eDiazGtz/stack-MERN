const express = require('express');

//start out server / create the express app object
const app = express();

// This is needed to allow for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//  configure my connection with Mongo / using Mongoose
const mongoose = require('mongoose');

mongoose.connect('')

// routes go here
app.get('/',(req, res) => {
    return res.json({ message: 'Hello World!' });
})

app.get('/api/dogs', (req, res) => {
    console.log("We got some dogs");
})

// I want to just get ONE dog, based on its _id
app.get('/api/dogs/:dogId', (req, res) => {
    console.log('Getting a single dog');
})

// if data is being sent TO my server to create something new, we use a post request
app.post('/api/dogs/create', (req, res) => {
    console.log('Creating a single dog socuments in our Mongo DB')
})



// This MUST be the last line of code in the file = no routes below this line
app.listen(8000, () => 
    console.log("You have successfully connected to port 8000")
);