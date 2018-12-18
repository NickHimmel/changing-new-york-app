import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
