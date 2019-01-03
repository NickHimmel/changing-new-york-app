import React from 'react';
import './App.css';
import Map from './components/Map.js'
import Photos from './components/Photos/Photos.js'
import styles from './base-styles/Layout.module.css';

require('dotenv').config();

const App = () => {
  return (
    <div className={styles.twelveColumnGrid}>
      <Map />
      <Photos />
    </div>
  );
}

export default App;
