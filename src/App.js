import React from 'react';
import './App.css';
import Map from './components/Map.js'

require('dotenv').config();

const App = () => {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
