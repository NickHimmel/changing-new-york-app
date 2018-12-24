import React from 'react';

const Photo = (props) => {

  return (
    <div>
      <h1>{props.data.title}</h1>
      <h2>{props.data.note}</h2>
      <a href={props.data.item_link} target="_blank"><img src={props.data.image} width="500px"/></a>
      <h3>{props.data.photographer}, {props.data.date}</h3>
      <a href={props.data.rights_link} target="_blank">{props.data.rights}</a>
    </div>
  )
}

export default Photo;
