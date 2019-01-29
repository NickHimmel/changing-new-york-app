import React from 'react';

const Footnotes = (props) => {
  return (
    <div className='footnotes'>
      {props.data.map((footnote, i) => {
        return (
          <div className='toolTip' key={i}>
            <span className='toolTipText'>"{footnote.title}"<br/>-{footnote.site}</span>
            <a className='footnoteLink' href={footnote.link} target="_blank" rel="noopener noreferrer">{i + 1}</a>
          </div>
        )
      })}
    </div>
  )
}

export default Footnotes;
