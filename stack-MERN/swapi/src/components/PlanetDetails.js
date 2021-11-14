import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetDetails = props => {

const [ planet, setPlanet ] = useState({}); // Setting base value to empty obj
  const [ changePlanet, setChangePlanet ] = useState(1); // Change planet index onClick

  // const getPlanet = () => { useEffect will run anon function upon load once, unless deps (dependencies)
    useEffect( () => {

    // fetch(`https://swapi.dev/api/planets/${changePlanet}/`) // success | failure | pending       are the three states of promises
    axios.get(`https://swapi.dev/api/planets/${changePlanet}/`)

    // successful response
        .then((response) => {
        // console.log('Responded')
        // console.log(response)

        // New Axiom way | Axiom sets data to json format
        setPlanet(response.data);

        // Straight JS 
        // When success we can convert response to JSON to use
      //     response.json()
      //         .then((jsonResponse) => {
      //             // console.log(jsonResponse)
      //             setPlanet(jsonResponse);
      //             // console.log(planet.name)
      //         })
      //         .catch((jsonError) => {
      //             console.log((jsonError))
      //         })
        })
// failure / error response
    .catch((error) => {
        console.log(error)
        })
    }, 
    [
        changePlanet,
    ]// deps is an array of state that we watch - upon change, reruns useEffect callback
    )

    const changePlanetClick = () => {
    // add 1 to planet id
    setChangePlanet(changePlanet + 1);
    }

    return (
        <div>
            <h2>Planet Details</h2>
            <button onClick={ (event) => {changePlanetClick()} }>Change Planet</button>
            <h4>{ planet.name }</h4>
            <h4>Climate: { planet.climate }</h4>
        </div>
    )
}

export default PlanetDetails;