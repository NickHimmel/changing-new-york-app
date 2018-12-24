import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo.js';
import Comparison from './Comparison.js';

class Photos extends Component {

  render() {
    if(this.props.now_photo) {
      console.log(this.props.now_photo.uuid)
    }
    return (
      <div>
        <Photo />
        <Photo />
        <Comparison />
      </div>
    );
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

export default connect(
  mapStateToProps
)(Photos);
