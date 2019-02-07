import React from 'react';

const Photo = (props) => {
  return (
    <div className='photo'>
      <a href={props.data.item_link} target='_blank' rel='noopener noreferrer'>
        <img src={props.data.image} alt={props.data.title}/>
      </a>
    </div>
  )
}

export default Photo;
