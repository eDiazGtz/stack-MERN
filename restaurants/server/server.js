// import express and other libraries
const express = require('express');
const app = express();
const cors = require('cors')

// configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:3000",
}))

//configure mongoose to connect
require('./config/mongoose.config');

//add routes to listen
const restaurantRoutes = require('./routes/restaurant.routes')
restaurantRoutes(app); // run the routes function and pass in our app server

//start the app server listening
app.listen(8000,() => {
    console.log(`The express app server is listening on port ${8000}`)
})