const express = require('express');

//start out server / create the express app object
const app = express();

// This is needed to allow for JSON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// connect with the Mongo db for this app
// this syntax will RUN the code inside of the mongoose.config.js file
// it does NOT import it
require('./config/mongoose.config');

// require the routes so they can be loaded into our app server
// it needs to listen to all the routes for our dogs
const dogRoutes = require('./routes/dog.routes');
//dogRoutes is the function we exported in the routes file
dogRoutes(app); // pass in the configured app server so the routes are setup

// This MUST be the last line of code in the file = no routes below this line
app.listen(8000, () => 
    console.log("You have successfully connected to port 8000")
);