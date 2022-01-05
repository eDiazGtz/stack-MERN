// Regular ES6 JS syntax - less vanilla JS
const express = require('express'); // This is import statement in REACT
const app = express(); // app has an instance of express -- like flask
const faker = require('faker');

//configure the express app server to use JSON and other data in the request
app.use(express.json());
app.use(express.urlencoded({
    extended : true, // setting to true so we use the qs library to pull info from urls
}));


// vvv Sets API route vvv
// don't forget the HHTP VERB

app.get('/api/welcome', (request, response) => {
    console.log('this is the welcome API route');
    // console.log(request);
    // leaving a bug - you MUST respond at the end of your function!
    response.send({ message : "Welcome to our API" });
});

// listning for a post request for this specific route
app.post("/api/welcome", (request, response) => {
    //body the object that will hold the data being passed in
    console.log(body);
    reqBody = request.body
    const welcomeMessage = `Welcome to our API ${reqest.body.name}`
    
    // return the response to the client that made the request
    response.send({
        message: welcomeMessage,
        requestBody: reqBody,
    });
})

// we can call params whatever we want
// they will always be request and response obj from our app server
//req ==> resquest
//res ==> response
app.get('/api/welcome-user', (req, res) => {
    const name = faker.name.firstName();
    const email = faker.internet.email();

    // ensures the response is configured to let the client know that the
    // data is coming back in JSON format
    // very important to use res.json() when responsing to axios requests from React
    // res.send({  don't use this -- use res.json({
    res.json({
        firstName: name,
        userEmail: email,
    });
})

// start listening for requests on this express app server
app.listen(8000, () => console.log("The server is listening on port 8000"))