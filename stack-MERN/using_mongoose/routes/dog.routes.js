// routes go here
const DogController = require('../controllers/dog.controller');

// where does app come from?
// when this function is run, it will load in ALL routes
module.exports = (app) => {
    app.get('/', DogController.welcome);
    
    // get all documents form the "dogs" collection and return an array of 'dog' doc (obj)
    app.get('/api/dogs', DogController.getAllDogs);
    
    // I want to just get ONE dog, based on its _id
    app.get('/api/dogs/:dogId', DogController.getOneDog);
    
    // if data is being sent TO my server to create something new, we use a post request
    app.post('/api/dogs/create', DogController.createDog);
}    
