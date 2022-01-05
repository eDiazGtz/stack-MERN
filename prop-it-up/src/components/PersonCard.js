import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const personStyle = {
        border : 'solid black 1px',
    };

    const [ birthday, setAge ] = useState(age);

    const birthdayClickHandler = (event) => {
        let newAge = birthday + 1;
        console.log(`New Age: ${newAge}`);
        setAge(newAge);
    }

    return (
        <div style={ personStyle }>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { birthday }</p>
            <p>Hair Color: { hairColor }</p>
            <button
                onClick={ birthdayClickHandler }
            >
                It's { firstName }'s Birthday!
            </button>
        </div>
    );
}

export default PersonCard;