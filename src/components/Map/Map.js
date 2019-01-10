import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js'
import styles from './Map.module.css';
import geojson from '../../data/new-york-locations.js'

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {
      features: [],
      feature: {}
    }
  }

  componentDidMount() {
    console.log(geojson.geojson.features);
    const mapContainer = document.getElementById('map');
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new MAPBOXGL.Map({
      container: mapContainer,
      style: 'mapbox://styles/nickhimmel/cjqpg56kw22bi2sk8nwd4icsh',
      center: [-74.02, 40.705],
      zoom: 13,
      interactive: false
    });

    geojson.geojson.features.forEach(function(marker) {
      const el = document.createElement('div');
      el.cassName = 'marker';

      new MAPBOXGL.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    })

  }

  render() {
    return (
      <div id='map' className={styles.container}>
        <a href='https://blog.mapbox.com/designing-north-star-c8574e299c94'>Design North Star</a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPhotos
  },
  dispatch,
)

export default connect(
  null,
  mapDispatchToProps
)(Map);
