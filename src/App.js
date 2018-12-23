import React from 'react';
import './App.css';
import Map from './components/Map.js'
import Photos from './components/Photos.js'

require('dotenv').config();

const App = () => {
  return (
    <div>
      <Map />
      <Photos />
    </div>
  );
}

export default App;
