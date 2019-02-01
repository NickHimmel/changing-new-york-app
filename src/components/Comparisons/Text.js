import React from 'react';

const Text = (props) => {
  return (
    <div className='text'>
      <h2>Now and Then</h2>
      <div className='line'></div>
      {props.data.map((paragraph, i) => {
        return <p className='' key={i}>{paragraph}</p>
      })}
    </div>
  )
}

export default Text;
