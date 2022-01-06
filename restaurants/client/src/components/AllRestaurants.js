import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const AllRestaurants = (props) => {
    const [ allRestaurants, setAllRestaurants ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/restaurants')
            .then((res) => {
                console.log(res);
                setAllRestaurants(res.data); // this is the body that is returned in postman
            })
            .catch((err) => {
                console.log(err);
            });
        // always rememeber the dependencies array - empty arr is fine
    }, []);
    
    return (
        <div>
            <h2>All Restaurants</h2>
            {
                allRestaurants.map((restaurant, index) => (
                    <div key={index}>
                        <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
                    </div>
                )) // in ES6 if there is only one statement after arrow-func it will return that. The parenth tricks into having only one thing, and thus returns it all
                // You can write curly-brackets and then you would need a return(CODE HERE)
            }
        </div>
    )
}

export default AllRestaurants;
