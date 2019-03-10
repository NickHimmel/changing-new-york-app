import React from 'react';
import 'normalize.css';
import './App.scss';
import Intro from './components/Intro.js';
import Map from './components/Map.js';
import Comparison from './components/Comparison/Comparison.js';

require('dotenv').config();

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Map />
      <Comparison />
    </div>
  );
}

export default App;
