import React from 'react';

const Comparison = (props) => {
  return (
    <div>
      {props.data.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
      })}
    </div>
  )
}

export default Comparison;
