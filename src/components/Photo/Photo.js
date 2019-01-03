import React from 'react';
import styles from './Photo.module.css';

const Photo = (props) => {

  const longDate = (date) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options)
  }

  return (
    <div>
      <h1>{props.data.title}</h1>
      <a href={props.data.item_link} target="_blank" rel="noopener noreferrer">
        <img className={styles.image} src={props.data.image} alt={props.data.title}/>
      </a>
      <h2 className={styles.note}>{props.data.note}</h2>
      <div className={styles.credits}>
        <h3 className={styles.photographer}>{props.data.photographer}</h3>
        <h3 className={styles.date}>{longDate(props.data.date)}</h3>
        <h3><a href={props.data.rights_link} target="_blank" rel="noopener noreferrer">{props.data.rights}</a></h3>
      </div>
    </div>
  )
}

export default Photo;