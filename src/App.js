import React from 'react';
import './App.css';
import Map from './components/Map.js'
import Photo from './components/Photo.js'
import Comparison from './components/Comparison.js'

require('dotenv').config();

const App = () => {
  return (
    <div>
      <Map />
      <Photo />
      <Comparison />
    </div>
  );
}

export default App;
