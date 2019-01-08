import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js'
import Photo from '../Photo/Photo.js';
import Text from '../Text/Text.js';
import Footnotes from '../Footnotes/Footnotes.js';
import styles from './Photos.module.css';
import { thenPhoto } from '../../utils/helpers.js'

class Photos extends Component {
  constructor(props) {
    super (props);

    this.state = {
      uuid: 'e3c8e2d0-c60c-012f-d813-58d385a7bc34'
    }
  }

  componentDidMount() {

    Promise.all([
      axios.get('/api/v1/items/aee450e0-c60c-012f-2b4b-58d385a7bc34?withTitles=yes'),
      axios.get('/api/v1/mods/aee450e0-c60c-012f-2b4b-58d385a7bc34')
    ]).then (([items, mods]) => {
      console.log(thenPhoto(items, mods));
    }).catch(error => {
      console.log(error.message)
    });

    this.props.fetchPhotos(this.state.uuid);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.isFetching || this.props.isFetching === undefined ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.inner}>
            <Photo data={this.props.then_photo}/>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.photos.isFetching,
    then_photo: state.photos.then_photo,
    now_photo: state.photos.now_photo,
    comparison: state.photos.comparison
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPhotos
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
