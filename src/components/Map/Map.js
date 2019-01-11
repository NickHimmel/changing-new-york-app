import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js';
import geojson from '../../data/new-york-locations.js'
import styles from './Map.module.css';

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {
      features: [],
      feature: {}
    }
  }

  componentDidMount() {

    const mapContainer = document.getElementById('map');
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new MAPBOXGL.Map({
      container: mapContainer,
      style: 'mapbox://styles/nickhimmel/cjqrif8l61xis2qn4zemgwtx4',
      center: [-74.02, 40.705],
      zoom: 13,
      interactive: false
    });

    const selectedFeature = (map, id) => {
      map.setPaintProperty('changing-new-york', 'circle-color', ['case', ['==', ['id'], id], '#fff', '#000']);
      map.setPaintProperty('changing-new-york', 'circle-stroke-width', ['case', ['==', ['id'], id], 3, 0]);
      map.setPaintProperty('changing-new-york', 'circle-stroke-color', ['case', ['==', ['id'], id], '#db4839', '#000']);
    }

    const getFeatures = (e, map) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['changing-new-york']
      });

      this.setState({
        features: features,
        feature: features[0]
      });
    }

    map.on('load', function() {
      map.addSource('changing-new-york', {
        'type': 'geojson',
        'data': geojson.geojson
      });

      map.addLayer({
        'id': 'changing-new-york',
        'layout': {},
        'paint': {},
        "source": 'changing-new-york',
        'type': 'circle'
      })

      selectedFeature(map, 10)
    })

    map.on('click', (e) => {

      getFeatures(e, map)

      if (this.state.feature !== undefined) {
        selectedFeature(map, this.state.feature.id)
      };
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
