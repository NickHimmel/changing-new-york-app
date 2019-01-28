import React from 'react';

const Intro = () => {
  return (
    <div className="intro">
      <h1 className="title">Changing<br/>New York</h1>
      <div className="intro__inner">
        <p className="header"><span className="highlight">In 1935 the American photographer Berenice Abbott </span>proposed to the Federal Art Project a series that would document a growing New York City. In 1939 the results were printed in a book titled “Changing New York.”  Her work would end up documenting the waning of an industrial New York as rapid technological change was pushing the city into the future. In the public domain, Berenice’s elegant, precise, and lively images have become a touchstone for photographers. Her historic record has created opportunity for a dialog about how New York has changed and where it is going.</p>
        <p>Focusing on the Lower Manhattan waterfront and the Brooklyn Bridge Park area, this project uses the New York Public Library API to compare Berenice’s photos to photos I have taken this year and last.</p>
        <div className="line"></div>
        <p>New York City was born on the water. A verdant paradise with accessible waterfronts led to the first settlements in what is now Lower Manhattan. In the 19th century goods were moved by boat and New York’s river access made the city rich. Industrial titans built a grand and gilded city. But the steep price for that wealth was poison, as industry polluted the rivers and the air.</p>
        <p>Throughout the 20th century New York moved away from heavy industry. The financial sector, Wall Street, excelled. Skyscrapers rose ever higher, office towers holding the new engines of the city. The waterfront was mostly abandoned. Robert Moses built his great highway system along the rivers and large scale housing complexes were erected for the poor.</p>
        <p>Now Wall Street is the financial capital of the world. New York is a luxury city. The rivers have been cleaned, the city and private developers are reclaiming the waterfront. The once hard-working piers are being replaced with active community spaces and Instagram-worthy destinations. High-end residential towers now sprout along the rivers. Ferries have returned to the waters. The rejuvenation has been a wild success, but the future looms ominously. Global warming is happening and the waters are rising. Soon the city’s coastline will have to be fundamentally reimaged. As Berenice Abbott captured a rapidly disappearing piece of New York, I might have as well.</p>
        <div className="instructions">
          <span className="pointer">&#9755;</span>
          <p>To view images and information about a location, click the dot on the map</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
