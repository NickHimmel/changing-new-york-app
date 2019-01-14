import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Loading</h1>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
