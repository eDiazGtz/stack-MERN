import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planets = props => {

const [ planets, setPlanets ] = useState([]);

    useEffect( () => {
    axios.get('https://swapi.dev/api/planets/')
    .then((response) => {
        console.log(response);
        console.log(response.data.results);
        setPlanets(response.data.results);
    })
    .catch((error) => {
        console.log(error)
        })
    }, 
    []
    )

    return (
        <div>
            <h2>Planet List</h2>
            {
                planets.map((planet, index) => (
                    <div key={ index }>
                        <p>Planet Name: { planet.name }</p>
                        <p>Planet Climate: { planet.climate }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Planets;