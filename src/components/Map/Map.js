import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js';
import geojson from '../../data/new-york-locations.js'
import styles from './Map.module.css';

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {id: 10}
  }

  handleClick = (uuid) => {
    this.props.fetchPhotos(uuid);
  }

  componentDidMount() {

    const mapContainer = document.getElementById('map');

    const MAPBOXGL = window.mapboxgl;

    const popup = new MAPBOXGL.Popup({ offset: [0, -15] })

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const map = new MAPBOXGL.Map({
      container: mapContainer,
      style: 'mapbox://styles/nickhimmel/cjqrif8l61xis2qn4zemgwtx4',
      center: [-74.024, 40.71],
      zoom: 13.3,
      interactive: false
    });

    geojson.geojson.features.forEach((marker) => {

      const el = document.createElement('div');

      el.className = 'marker';

      if(marker.id === this.state.id) {
        el.setAttribute("id", "active");
      }

      el.addEventListener('mouseover', () => {
        popup.setLngLat(marker.geometry.coordinates)
          .setHTML('<p>' + marker.properties.title + '</p>')
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
      });

      el.addEventListener('click', () => {
        document.getElementById("active").removeAttribute("id");
        el.setAttribute("id", "active");
        this.handleClick(marker.properties.UUID)
      });

      new MAPBOXGL.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });

  }

  render() {
    return (
      <div id='map' className={styles.container}>
        <div className={styles.credits}>
          <a href='https://blog.mapbox.com/designing-north-star-c8574e299c94'>Design North Star</a>
        </div>
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
