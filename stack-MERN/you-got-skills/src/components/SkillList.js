import React from 'react'

const SkillList = (props) => {
    const {skills} = props

    return (
        <div>
            { 
            skills.map( (eachSkill, index) => (
                <p key={index}>
                    Skill Name: {eachSkill.name}<br />
                    Skill Level: {eachSkill.level}<br />
                </p> 
                    )
                )
            }

        </div>
    )
}

export default SkillList
