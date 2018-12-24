import React from 'react';

const Footnotes = (props) => {
  return (
    <div>
      <h3>Footnotes</h3>
      {props.data.map((footnote, i) => {
        return <a href={footnote.link} target="_blank" key={i} rel="noopener noreferrer">{i + 1}</a>
      })}
    </div>
  )
}

export default Footnotes;
