import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
import Skill from './components/Skill';
import SkillList from './components/SkillList';

function App() {
  const [ skill, setSkill ] = useState("")
  const [ skills, setSkills ] = useState([]);

  const skillEventHandler = (event) => {
    event.preventDefault() //stops default action from occuring when this functino runs
    // This helps prevent a redirect on form submission - so state doesn't clear

    // Long Way
    // let newSkills = [];
    // newSkills.push(skill);
    // for (let i = 0; i < newSkills.length; i++) {
    //     newSkills.push(skills[i]) // This is to front push a skill in list
    //     setSkills(newSkills);


    // Destructuring
    if (skill.length === 0) {
        return;
    }        
    let newSkills = [skill, ...skills];
    setSkills(newSkills);
    setSkill("");

}

  return (
    <div className="App">
      <h1>You have got Skillz!</h1>
      <Input 
        skill = {skill}
        setSkill = {setSkill}
        skillEventHandler = {skillEventHandler}
      />
      <SkillList 
        skills = {skills}
      />
      <Footer />
    </div>
  );
}

export default App;
