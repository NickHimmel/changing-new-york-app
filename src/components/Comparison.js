import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo.js';
import Text from './Text.js';
import Footnotes from './Footnotes.js';

class Comparison extends Component {

  render() {
    if(this.props.now_photo) {
      return (
        <div>
          <Photo data={this.props.then_photo}/>
          <Photo data={this.props.now_photo}/>
          <Text data={this.props.comparison.text}/>
          <Footnotes data={this.props.comparison.footnotes}/>
        </div>
      )
    } else {
      return (
        null
      )
    }
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
)(Comparison);
