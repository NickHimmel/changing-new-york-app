import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js'
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
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['changing-new-york-waterfront']
    });

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
        style: 'mapbox://styles/nickhimmel/cjdqhpjto1hev2sn5lxumgusz',
        center: [-74.02, 40.705],
        zoom: 13,
        interactive: false
    });

    var popup = new MAPBOXGL.Popup({ offset: [0, -15] })

    map.on('mousemove', (e) => {

      map.getCanvas().style.cursor = 'pointer';

      this.getFeatures(e, map)

      if (!this.state.features.length) {
        popup.remove();
        return;
      };

      popup.setLngLat(this.state.feature.geometry.coordinates)
        .setHTML('<p>' + this.state.feature.properties.title + '</p>')
        .setLngLat(this.state.feature.geometry.coordinates)
        .addTo(map)

    });

    map.on('click', (e) => {

        this.getFeatures(e, map)

        if (this.state.feature !== undefined) {
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
