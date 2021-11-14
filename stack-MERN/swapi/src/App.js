import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlanetDetails from './components/PlanetDetails';

function App() {
  
  return (
    <div className="App">
      <h2>Using SWAPI</h2>
      <PlanetDetails 
        // name
        // climate
      />
    </div>
  );
}

export default App;
