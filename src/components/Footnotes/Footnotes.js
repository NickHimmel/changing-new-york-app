import React from 'react';
import styles from './Footnotes.module.css';

const Footnotes = (props) => {
  return (
    <div>
      <h3>Footnotes</h3>
      <div>
        {props.data.map((footnote, i) => {
          return (
            <div className={styles.toolTip} key={i}>
              <span className={styles.toolTipText}>"{footnote.title}"  -{footnote.site}</span>
              <a className={styles.footnoteLink} href={footnote.link} target="_blank" rel="noopener noreferrer">{i + 1}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footnotes;
