const mongoose = require('mongoose');

// create a model / schema (schema is the layout of the data and the shape of the data) model is just shape
// we create the above to shape and connect w/ specific collection in DB
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    isFriendly: {
        type: Boolean,
    },
}, {timestamps: true});
// timestamps auto create a createdAt and updatedAt date and time info for each document
// every time a doc is updated, it will change the updatedAt date and time value

// model is a combination of the schema and the collection name
const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;
