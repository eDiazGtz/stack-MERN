const RestaurantController = require('../controllers/restaurant.controller')

module.exports = (app) => {
    app.get('/api/restaurants', RestaurantController.getAll);
    // create a new restaurant
    app.post('/api/restaurants', RestaurantController.create);
    // get a single restaurant
    // update a single restaurant
    // delete a single restaurant
}