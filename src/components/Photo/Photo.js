import React from 'react';
import styles from './Photo.module.css';

const Photo = (props) => {

  const longDate = (date) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options)
  }

  return (
    <div className={styles.container}>
      <a className={styles.link} href={props.data.item_link} target="_blank" rel="noopener noreferrer">
        <img className={styles.image} src={props.data.image} alt={props.data.title}/>
      </a>
      <h1 className={styles.title}>{props.data.title} <span className={styles.note}>{props.data.note}</span></h1>
      <h3 className={styles.photographer}>{props.data.photographer}, <span className={styles.date}>{longDate(props.data.date)}</span></h3>
      <a className={styles.rightsLink} href={props.data.rights_link} target="_blank" rel="noopener noreferrer">{props.data.rights}</a>
    </div>
  )
}

export default Photo;
