// require the models that are needed to complete the work in this controller
const Dog = require('../models/dog.model')
module.exports.welcome = (req, res) => {
    return res.json({ message: 'Hello World!' });
};

module.exports.getAllDogs = (req, res) => {
    console.log("We got some dogs");

    // use the model to connect to the colleciton and return all docs
    Dog.find( {} ) // THIS IS A PROMISE
    .then((allDogDocuments) => {
        console.log("Get all dogs - success.");
        console.log(allDogDocuments);
        res.json(allDogDocuments);
    })
    .catch( (err) => {
        console.log(`Get all dogs - failure. \nERR: ${err}`);
        res.json(err);
    });
};

module.exports.getOneDog = (req, res) => {
    console.log('Getting a single dog');
    console.log(`Dog Id: ${req.params.dogId}`);

    Dog.findById(req.params.dogId)
    .then((dogObject) => {
        console.log("Get one dog - success.");
        console.log(dogObject);
        res.json(dogObject);
    })
    .catch( (err) => {
        console.log(`Get one dog - failure. \nERR: ${err}`);
        res.json(err);
    });
}

module.exports.createDog = (req, res) => {
    console.log('Creating a single dog socuments in our Mongo DB');
    
    Dog.create(req.body)
    .then((newDogObject) => {
        console.log("Create new Dog - success.");
        console.log(newDogObject)
        res.json(newDogObject)
    })
    .catch( (err) => {
        console.log(`Create new Dog - failure. \nERR: ${err}`);
        res.json(err);
    })
};