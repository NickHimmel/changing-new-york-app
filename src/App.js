import React from 'react';
import 'normalize.css';
import Map from './components/Map/Map.js'
import Photos from './components/Photos/Photos.js'
import styles from './App.module.css';

require('dotenv').config();

const App = () => {
  return (
    <div className={styles.container}>
      <Map />
      <Photos />
    </div>
  );
}

export default App;
