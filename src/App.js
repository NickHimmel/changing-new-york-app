import React from 'react';
import 'normalize.css';
import './base-styles/global.css'
import styles from './App.module.css';
import Intro from './components/Intro/Intro.js'
import Map from './components/Map/Map.js';
import Comparisons from './components/Comparisons/Comparisons.js';

require('dotenv').config();

const App = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <Map />
      <Comparisons />
    </div>
  );
}

export default App;
