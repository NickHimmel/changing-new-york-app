import React from 'react';

const Footnotes = (props) => {

  const toggleFootnotes = (e) => {
    const footnotes = document.getElementById('footnotes-list');
    const footnotesButton = document.getElementById('footnotes__button');
    if (footnotes.classList.contains('visible')) {
      footnotes.classList.remove('visible');
      footnotesButton.innerHTML = '- Close Footnotes'
    } else {
      footnotes.classList.add('visible');
      footnotesButton.innerHTML = '+ View Footnotes'
    }
  }

  return (
    <div className='footnotes'>
      <button id='footnotes__button' onClick={toggleFootnotes}>+ View Footnotes</button>
      <ul id='footnotes-list' className='visible' >
        {props.data.map((footnote, i) => {
          return (
            <li key={i}>
              <div className='tooltip'>
                <span className='tooltip-text'>“{footnote.title}.” {footnote.site}.</span>
                <a className='link' href={footnote.link} target='_blank' rel='noopener noreferrer'>{i + 1}</a>
              </div>
              <div className='footnotes__mobile'>
                <a className='link-grey ' href={footnote.link} target='_blank' rel='noopener noreferrer'>“{footnote.title}.”</a><span className='footnotes-site'>{footnote.site}.</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Footnotes;
