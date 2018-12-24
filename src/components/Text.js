import React from 'react';

const Text = (props) => {
  return (
    <div>
      {props.data.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
      })}
    </div>
  )
}

export default Text;
