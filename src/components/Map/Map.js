import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js';
import geojson from '../../data/new-york-locations.js'
import { activeFeature, queryFeatures } from '../../utils/helpers.js';
import styles from './Map.module.css';

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {
      features: [],
      feature: {}
    }
  }

  handleClick = (uuid) => {
    this.props.fetchPhotos(uuid);
  }

  getFeatures = (e, map) => {
    const features = queryFeatures(e, map);

    this.setState({
      features: features,
      feature: features[0]
    });
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

    map.on('load', function() {
      map.addSource('changing-new-york', {
        'type': 'geojson',
        'data': geojson.geojson
      });

      map.addLayer({
        'id': 'changing-new-york',
        'layout': {},
        'paint': {},
        'source': 'changing-new-york',
        'type': 'circle'
      })

      activeFeature(map, 10)
    })

    map.on('click', (e) => {
      this.getFeatures(e, map)

      if (this.state.feature !== undefined) {
        console.log(this.state.feature.id)
        activeFeature(map, this.state.feature.id)
        this.handleClick(this.state.feature.properties.UUID);
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
