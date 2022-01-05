import React, { useState } from 'react';

const Project = (props) => {
    const { title, likesCount, description } = props
    
    const projectStyle = {
        border : "solid black 1px",
        width : "270px",
        height : "200px",
        margin : "15px",
        padding : "5px",
        display : "inline-block",
    }

    // useState returns a stateful value (getter) and a fucntion to update it (setter)
    const [ likes, setLikes ] = useState(likesCount);
    const [ hasLiked, setHasLiked ] = useState(false);

                //event will be obj
    const likesClickHandler = (event) => {
        let newLikes = likes + 1;
        console.log(`New like Count ${newLikes}`);
        setLikes(newLikes); //informs react to update this Component
        // this Hook State is NOT persistent
        setHasLiked(true);
    }

    //event will be obj
    const dislikesClickHandler = (event) => {
        let newLikes = likes - 1;
        console.log(`New like Count ${newLikes}`);
        setLikes(newLikes); //informs react to update this Component
        // this Hook State is NOT persistent
        setHasLiked(false);
    }

    return (
        <div style={ projectStyle }>
            <h3>{ title }</h3>
            {/* When button is clicked, it will execute the function */}
            <button 
                onClick={ (event) => likesClickHandler(event) }
                disabled={ hasLiked } 
            >
                Like Project
            </button>

            <button 
                onClick={ dislikesClickHandler }
                disabled={ !hasLiked } 
            >
                Dislike Project
            </button>
          
            <h4>Likes: { likes }</h4>
            <div>{ description }</div>
        </div>
    );
}

export default Project;