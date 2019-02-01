import React from 'react';

const Caption = (props) => {

  const longDate = (date) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options)
  }

  return (
    <div className='caption'>
      <h2>{props.data.title} <span className='note'>{props.data.note}</span></h2>
      <h3>{props.data.photographer}, <span className='date'>{longDate(props.data.date)}</span></h3>
      <a className='link-grey' href={props.data.rights_link} target='_blank' rel='noopener noreferrer'>{props.data.rights}</a>
    </div>
  )
}

export default Caption;
