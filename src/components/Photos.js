import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions/actions.js'
import Photo from './Photo/Photo.js';
import Text from './Text.js';
import Footnotes from './Footnotes.js';

class Photos extends Component {
  constructor(props) {
    super (props);

    this.state = {
      uuid: 'e3c8e2d0-c60c-012f-d813-58d385a7bc34'
    }
  }

  componentDidMount() {
    this.props.fetchPhotos(this.state.uuid);
  }

  render() {
    if(this.props.isFetching === false) {
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
