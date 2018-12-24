import React from 'react';

const Comparison = (props) => {
  console.log(props.data)
  return (
    <div>
    {props.data.text.map((paragraph, i) => {
      return <p key={i}>{paragraph}</p>
    })}
    </div>
  )
}

export default Comparison;
