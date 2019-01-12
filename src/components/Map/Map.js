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
      feature: {},
      id: 10
    }
  }

  handleClick = (uuid) => {
    this.props.fetchPhotos(uuid);
  }

  getFeatures = (e, map) => {
    const features = map.queryRenderedFeatures(e.point, {
       layers: ['changing-new-york']
     });

    this.setState({
      features: features,
      feature: features[0]
    });
  }

  activeFeature = (map, id) => {
    this.setState({
      id: id
    })

    map.setPaintProperty('changing-new-york', 'circle-color', ['case', ['==', ['id'], this.state.id], '#db4839', '#000']);
    map.setPaintProperty('changing-new-york', 'circle-radius', ['case', ['==', ['id'], this.state.id], 10, 5]);
  }

  inactiveFeature = (map) => {
    map.setPaintProperty('changing-new-york', 'circle-color', ['case', ['!=', ['id'], this.state.id], '#000', '#000']);
  }

  componentDidMount() {
    const mapContainer = document.getElementById('map');
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new MAPBOXGL.Map({
      container: mapContainer,
      style: 'mapbox://styles/nickhimmel/cjqrif8l61xis2qn4zemgwtx4',
      center: [-74.025, 40.69],
      zoom: 13.25,
      interactive: false
    });

    map.on('load', () => {
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

      this.activeFeature(map, this.state.id)
    })

    const popup = new MAPBOXGL.Popup({ offset: [0, -15] })

    map.on('mousemove', (e) => {

      map.getCanvas().style.cursor = 'pointer';

      this.getFeatures(e, map)

      if (!this.state.features.length) {
        popup.remove();
        return;
      };
      this.activeFeature(map, this.state.feature.id)
      popup.setLngLat(this.state.feature.geometry.coordinates)
        .setHTML('<p>' + this.state.feature.properties.title + '</p>')
        .setLngLat(this.state.feature.geometry.coordinates)
        .addTo(map)
    });

    map.on('mouseleave', (e) => {
      this.getFeatures(e, map)

      if (this.state.feature !== undefined) {
        this.inactiveFeature(map);
      }
    })

    map.on('click', (e) => {
      this.getFeatures(e, map)

      if (this.state.feature !== undefined) {
        this.activeFeature(map, this.state.feature.id)
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
