import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
// import Skill from './components/Skill';
import SkillList from './components/SkillList';

function App() {

  const [ skills, setSkills ] = useState([]);

  // take in a new skill object to add to the list of skills
  const skillEventHandler = (newSkill) => {
    // Destructuring
    if (newSkill.name.length === 0) {
        return;
    }
    let newSkills = [newSkill, ...skills];
    setSkills(newSkills);

}

  return (
    <div className="App">
      <h1>You have got Skils!</h1>
      <Input 
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
