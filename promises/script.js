// https://swapi.dev
// https://swapi.dev/documentation

console.log("May the force be with you!");

fetch("https://swapi.dev/api/planets/1/") // success | failure | pending       are the three states of promises

// successful response
    .then((response) => {
        console.log(response)
        // When success we can convert response to JSON to use
        response.json()
            .then((jsonResponse) => {
                console.log(jsonResponse)
            })
            .catch((jsonError) => {
                console.log((jsonError))
            })
    })
// failure / error response
    .catch((error) => {
        console.log(error)
    })
// promises are async
// Below is NOT ASYNC

console.log(Date.now().toLocaleString());
console.log("Meditating on life while waiting for SWAPI to return data!");