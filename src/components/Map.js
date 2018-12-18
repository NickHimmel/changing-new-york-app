import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {

    const mapContainer = document.getElementById('map');
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = 'pk.eyJ1Ijoibmlja2hpbW1lbCIsImEiOiJjajVvOHEwczIzbzFxMnFvNmgzYTlxcDNtIn0.so7Fl2IB0NepmcmrnpvC3Q';

    const map = new MAPBOXGL.Map({
        container: mapContainer,
        style: 'mapbox://styles/nickhimmel/cjdqhpjto1hev2sn5lxumgusz',
        center: [-73.9970, 40.705],
        zoom: 13.6,
    });

    var popup = new MAPBOXGL.Popup({ offset: [0, -15] })

    map.on('mousemove', function(e) {

      map.getCanvas().style.cursor = 'pointer';

      const features = map.queryRenderedFeatures(e.point, {
        layers: ['the-new-york-waterfront']
      });

      if (!features.length) {
        popup.remove();
        return;
      }

      const feature = features[0];

      popup.setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.UUID + '</h3> <p>' + feature.properties.title + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map)

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
