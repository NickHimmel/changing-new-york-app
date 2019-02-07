import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions/actions.js';
import geojson from '../data/new-york-locations.js'

class Map extends Component {
  constructor(props) {
    super (props);

    this.state = {
      id: 10,
      style: 'mapbox://styles/nickhimmel/cjqrif8l61xis2qn4zemgwtx4',
      interactive: false,
    }
  }

  handleClick = (uuid) => {
    this.props.fetchPhotos(uuid);
  }

  componentDidMount() {
    const MAPBOXGL = window.mapboxgl;

    MAPBOXGL.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const popup = new MAPBOXGL.Popup({ offset: [-5, -18] })

    const mapDesktop = new MAPBOXGL.Map({
      container: this.mapContainer,
      style: this.state.style,
      interactive: this.state.interactive,
      center: [-74.023, 40.71],
      zoom: 13.3
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
          .addTo(mapDesktop)
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
      });

      el.addEventListener('click', () => {
        const active = document.getElementById("active");

        active &&
          active.removeAttribute("id");

        el.setAttribute("id", "active");
        this.handleClick(marker.properties.UUID)
      });

      new MAPBOXGL.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mapDesktop)
    });

  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className='map'>
        <div className='map-credits'>
          <a className='link' href='https://blog.mapbox.com/designing-north-star-c8574e299c94'>Design North Star</a>
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
