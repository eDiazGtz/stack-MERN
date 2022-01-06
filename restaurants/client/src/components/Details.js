import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const Details = (props) => {
    const { id } = props;
    const [ restaurant, setRestaurant ] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/restaurants/${id}`)
            .then((res) => {
                console.log(res);
                setRestaurant(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // don't forget dependencies

    const restauranHasDelivery = (hasDelivery) => {
        if(hasDelivery) {
            var answer;
            answer = "Yes!";
        } else {
            answer = "Sorry... maybe in the future";
        }
        return answer;
    }

    return (
        <div>
            <h2>Restaurant Details</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{restaurant.name}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{restaurant.address}</td>
                    </tr>
                    <tr>
                        <td>Cuisine:</td>
                        <td>{restaurant.cuisine}</td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>{restaurant.phone}</td>
                    </tr>
                        <td>Delivery Available:</td>
                        <td>{restauranHasDelivery(restaurant.hasDelivery)}</td>
                    <tr>
                        <td>Hours:</td>
                        <td>{restaurant.hours}</td>
                    </tr>
                    <tr>
                        <td>Homepage:</td>
                        <td>{restaurant.homepage}</td>
                    </tr>
                    <tr>
                        <td>Established:</td>
                        <td>{restaurant.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Details;
