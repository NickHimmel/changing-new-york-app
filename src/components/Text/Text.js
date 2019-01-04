import React from 'react';
import styles from './Text.module.css';

const Text = (props) => {
  return (
    <div>
      <h2 className={styles.title}>Now and Then</h2>
      <div className={styles.line}></div>
      {props.data.map((paragraph, i) => {
        return <p className={styles.text} key={i}>{paragraph}</p>
      })}
    </div>
  )
}

export default Text;
