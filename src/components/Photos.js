import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions/actions.js'
import Photo from './Photo.js';
import Text from './Text.js';
import Footnotes from './Footnotes.js';

class Photos extends Component {

  componentDidMount() {
    this.props.fetchPhotos(this.props.match.params.id);
  }

  render() {
    if(this.props.now_photo) {
      return (
        <div>
          <a href="/">Return to Map</a>
          <div>
            <Photo data={this.props.then_photo}/>
            <Photo data={this.props.now_photo}/>
            <Text data={this.props.comparison.text}/>
            <Footnotes data={this.props.comparison.footnotes}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
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
