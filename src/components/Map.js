import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {

    const mapContainer = document.getElementById('map');

    window.mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja2hpbW1lbCIsImEiOiJjajVvOHEwczIzbzFxMnFvNmgzYTlxcDNtIn0.so7Fl2IB0NepmcmrnpvC3Q';

    const map = new window.mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/nickhimmel/cjdqhpjto1hev2sn5lxumgusz',
        center: [-73.9970, 40.705],
        zoom: 13.6,
    });

  }

  render() {

    return (
      <div>
        <h1>Map</h1>
        <div id='map'></div>
        <a href="https://blog.mapbox.com/designing-north-star-c8574e299c94">Design North Star</a>
      </div>
    );
  }
}

export default Map;
