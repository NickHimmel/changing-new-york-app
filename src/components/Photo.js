import React from 'react';

const Photo = (props) => {

  return (
    <div>
      <h1>{props.data.title}</h1>
      <h2>{props.data.note}</h2>
      <a href={props.data.item_link} target="_blank" rel="noopener noreferrer"><img src={props.data.image} alt={props.data.title} width="500px"/></a>
      <h3>{props.data.photographer}, {props.data.date}</h3>
      <a href={props.data.rights_link} target="_blank" rel="noopener noreferrer">{props.data.rights}</a>
    </div>
  )
}

export default Photo;
