//  configure my connection with Mongo / using Mongoose
const mongoose = require('mongoose');
const databaseName = "dogs";

mongoose.connect('mongodb://localhost/' + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("You are connected to the " + databaseName + " database!")
})
.catch((err) => {
    console.log(`There was an error connecting to the ${databaseName} database. \nError: ${err}`)
})
