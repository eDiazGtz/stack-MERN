import React, { useState } from 'react';

const Input = props => {
const { skill, setSkill, skillEventHandler } = props

    return (
        <div>
            <h4>Skills Form</h4>
            <form onSubmit={ skillEventHandler }>
                <input 
                    type="text" 
                    name="skill"
                    onChange={ (event) => setSkill(event.target.value) }
                    value={ skill }
                />
                {
                    skill.length > 0 ? <input type="submit" value="Add Skill"/> :
                        <span> 
                            <input type="submit" value="Add Skill" disabled="true" /> 
                            <p style={ { color:"green" } }>INPUT YOUR SKILL</p>
                        </span>
                }

            </form>

        </div>
    );
}

export default Input;