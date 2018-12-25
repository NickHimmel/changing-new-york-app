import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {
      redirect: false,
      uuid: ""
    }
  }

  handleClick = (uuid) => {
    this.setState({
      redirect: true,
      uuid: uuid
    });
  }

  getFeatures = (e, map) => {
    return map.queryRenderedFeatures(e.point, {
      layers: ['changing-new-york-waterfront']
    });
  }

  componentDidMount() {

    const mapContainer = document.getElementById('map');
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new MAPBOXGL.Map({
        container: mapContainer,
        style: 'mapbox://styles/nickhimmel/cjdqhpjto1hev2sn5lxumgusz',
        center: [-73.9970, 40.705],
        zoom: 13.6,
    });

    var popup = new MAPBOXGL.Popup({ offset: [0, -15] })

    map.on('mousemove', (e) => {

      map.getCanvas().style.cursor = 'pointer';

      const features = this.getFeatures(e, map)

      if (!features.length) {
        popup.remove();
        return;
      };

      const feature = features[0];

      popup.setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.UUID + '</h3> <p>' + feature.properties.title + '</p>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map)

    });

    map.on('click', (e) => {

        const features = this.getFeatures(e, map)

        const feature = features[0];

        if (feature !== undefined) {
          this.handleClick(feature.properties.UUID);
        };
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/photos/${this.state.uuid}`} />
    }
    return (
      <div>
        <div id='map'></div>
        <a href='https://blog.mapbox.com/designing-north-star-c8574e299c94'>Design North Star</a>
      </div>
    );
  }
}

export default Map;
