import './App.css';
import React from 'react';
// import axios from 'axios';
import { Router, Link } from '@reach/router'
import PlanetDetails from './components/PlanetDetails';
import Planets from './components/Planets';

function App() {
  
  const linkStyle = {
    margin : "10px",
    padding : "3px",
    backgroundColor : "green",
    color : "white",
    border : "solid green 2px",
  }

  return (
    <div className="App">
      <h2>Using SWAPI</h2>
      <Link to="/planets" style={linkStyle}>View Planet List</Link>
      <Link to="/planets/1" style={linkStyle}>View 1</Link>
      <Link to="/planets/2" style={linkStyle}>View 2</Link>
      <Link to="/planets/3" style={linkStyle}>View 3</Link>
      <Router>
        <Planets path="/planets" />
        <PlanetDetails path="/planets/:planet_id" />
      </Router>

    </div>
  );
}

export default App;
