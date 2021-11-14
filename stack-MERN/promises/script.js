// https://swapi.dev
// https://swapi.dev/documentation

console.log("May the force be with you!");

fetch("https://swapi.dev/api/planets/1/") // success | failure | pending       are the three states of promises
// successful response
// failure / error response
// promises are async

console.log(Date.now().toLocaleString());
console.log("Meditating on life while waiting for SWAPI to return data!");