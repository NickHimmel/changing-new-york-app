import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Photo from './components/Photo.js'
import Comparison from './components/Comparison.js'

require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {uuid: ''};
  }

  handleClick = (uuid) => {
    this.setState({
      uuid: uuid
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.uuid}</h1>
        <Map onClick={this.handleClick}/>
        <Photo />
        <Comparison /> 
      </div>
    );
  }
}

export default App;
