import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PlanetDetails = props => {

    const { planet_id } = props;
    const [ planet, setPlanet ] = useState({}); // Setting base value to empty obj
    const [ changePlanet, setChangePlanet ] = useState( planet_id ); // Change planet index onClick

  // const getPlanet = () => { useEffect will run anon function upon load once, unless deps (dependencies)
    useEffect( () => {

    // fetch(`https://swapi.dev/api/planets/${changePlanet}/`) // success | failure | pending       are the three states of promises
    axios.get(`https://swapi.dev/api/planets/${planet_id}/`)

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
    // Old way WITHOUT routing
    // setChangePlanet(changePlanet + 1);

    // New Routing Way
    setChangePlanet( Number(planet_id) + 1)
    let nextPlanet = changePlanet;
    navigate(`/planets/${nextPlanet}`);
    }

    return (
        <div>
            <h2>Planet Details</h2>
            <button onClick={ (event) => {changePlanetClick()} }>Change Planet</button>
            <h4> Looking at ID: { planet_id }</h4>
            <h4>{ planet.name }</h4>
            <h4>Climate: { planet.climate }</h4>
        </div>
    )
}

export default PlanetDetails;