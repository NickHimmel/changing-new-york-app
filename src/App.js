import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {uuid: ''};
  }

  render() {
    return (
      <div>
        <h1>{this.state.uuid}</h1>
        <Map />
      </div>
    );
  }
}

export default App;
