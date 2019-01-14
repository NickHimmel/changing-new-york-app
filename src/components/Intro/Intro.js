import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Changing<br/>New York</h1>
      <div className={styles.inner}>
        <p className={styles.header}><span className={styles.highlight}>In 1935 the American photographer Berenice Abbott </span>proposed to the Federal Art Project a series that would document a growing New York City. In 1939 the results were printed in a book titled “Changing New York.”  Her work would end up documenting the waning of an industrial New York as rapid technological change was pushing the city into the future. In the public domain, Berenice’s elegant, precise, and lively images have become a touchstone for photographers. Her historic record has created opportunity for a dialog about how New York has changed and where it is going.</p>
        <p className={styles.header}>Focusing on the Lower Manhattan waterfront and the Brooklyn Bridge Park area, this project uses the New York Public Library API to compare Berenice’s photos to photos I have taken this year and last.</p>
        <div className={styles.line}></div>
        <p className={styles.text}>New York City was born on the water. A verdant paradise with accessible waterfronts led to the first settlements in what is now Lower Manhattan. In the 19th century goods were moved by boat and New York’s river access made the city rich. Industrial titans built a grand and gilded city. But the steep price for that wealth was poison, as industry polluted the rivers and the air.</p>
        <p className={styles.text}>Throughout the 20th century New York moved away from heavy industry. The financial sector, Wall Street, excelled. Skyscrapers rose ever higher, office towers holding the new engines of the city. The waterfront was mostly abandoned. Robert Moses built his great highway system along the rivers and large scale housing complexes were erected for the poor.</p>
        <p className={styles.text}>Now Wall Street is the financial capital of the world. New York is a luxury city. The rivers have been cleaned, the city and private developers are reclaiming the waterfront. The once hard-working piers are being replaced with active community spaces and Instagram-worthy destinations. High-end residential towers now sprout along the rivers. Ferries have returned to the waters. The rejuvenation has been a wild success, but the future looms ominously. Global warming is happening and the waters are rising. Soon the city’s coastline will have to be fundamentally reimaged. As Berenice Abbott captured a rapidly disappearing piece of New York, I might have as well.</p>
        <div>
          <span className={styles.pointer}>&#9755;</span>
          <span className={styles.instructions}>To view images and information about a location, click the dot on the map</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
