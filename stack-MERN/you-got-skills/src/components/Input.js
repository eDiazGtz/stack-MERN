import React, { useState } from 'react';

const Input = (props) => {
    const { skillEventHandler } = props;

    // State that is not shared of lifted can be used to store things specific to this component
    // localstate
    const [ skillName, setSkillName ] = useState("");
    const [ skillLevel, setSkillLevel ] = useState(5);

    const submitSkill = (event) => {
        event.preventDefault(); // we need to make sure FORM doens't refresh page and lost state

        // Local state creating new obj to add to Skills list
        let newSkill = {
            name : skillName,
            level : skillLevel,
        }
        // adds new obj to skills list
        skillEventHandler(newSkill);

        // Reset form to defauls
        setSkillName("");
        setSkillLevel(5);
    }

    return (
        <div>
            <h4>Skills Form</h4>
            <form onSubmit={ submitSkill }>
                <label for="name">Skill Name:</label>
                <input 
                    type="text" 
                    name="skill"
                    onChange={ (event) => setSkillName(event.target.value) }
                    value={ skillName }
                />
                <br />
                <label for="level">Skill Level:</label>
                <input 
                    name="level"
                    type="number"
                    min="1"
                    max="10"
                    onChange={ (event) => setSkillLevel(event.target.value) }
                    value={ skillLevel }
                />
                <br />

                {
                    skillName.length > 0 ? <input type="submit" value="Add Skill"/> :
                        <span> 
                            <input type="submit" value="Add Skill" disabled={true} /> 
                            <p style={ { color:"green" } }>INPUT YOUR SKILL</p>
                        </span>
                }
            </form>

        </div>
    );
}

export default Input;