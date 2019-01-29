import React from 'react';

const Photo = (props) => {

  const longDate = (date) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options)
  }

  return (
    <div className='photo'>
      <div className='photo__inner'>
        <a href={props.data.item_link} target='_blank' rel='noopener noreferrer'>
          <img src={props.data.image} alt={props.data.title}/>
        </a>
      </div>
      <h2>{props.data.title} <span className='note'>{props.data.note}</span></h2>
      <h3>{props.data.photographer}, <span className='date'>{longDate(props.data.date)}</span></h3>
      <a href={props.data.rights_link} target='_blank' rel='noopener noreferrer'>{props.data.rights}</a>
    </div>
  )
}

export default Photo;
