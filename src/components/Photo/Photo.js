import React from 'react';
import styles from './Photo.module.css';

const Photo = (props) => {

  return (
    <div className="photo">
      <h1 className={styles.title}>{props.data.title}</h1>
      <h2>{props.data.note}</h2>
      <a href={props.data.item_link} target="_blank" rel="noopener noreferrer"><img className="photo-image" src={props.data.image} alt={props.data.title}/></a>
      <h3>{props.data.photographer}, {props.data.date}</h3>
      <a href={props.data.rights_link} target="_blank" rel="noopener noreferrer">{props.data.rights}</a>
    </div>
  )
}

export default Photo;
