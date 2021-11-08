import React from 'react'

const SkillLIst = (props) => {
    const {skills} = props

    return (
        <div>
            { 
            skills.map( (eachSkill, index) => <p key={index}>{ eachSkill }</p> )
            }

        </div>
    )
}

export default SkillLIst
