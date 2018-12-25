import React from 'react';

const Text = (props) => {
  return (
    <div>
      <h2>Now and Then</h2>
      {props.data.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
      })}
    </div>
  )
}

export default Text;
