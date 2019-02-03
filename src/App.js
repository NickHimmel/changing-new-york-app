import React from 'react';
import 'normalize.css';
import './App.scss';
import Intro from './components/Intro.js';
import Map from './components/Map.js';
import Comparisons from './components/Comparisons/Comparisons.js';

require('dotenv').config();

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Map />
      <Comparisons />
    </div>
  );
}

export default App;
