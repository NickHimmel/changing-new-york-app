import React, { Component } from 'react';
import { connect } from 'react-redux';

class Photos extends Component {

  render() {
    console.log(this.props.now_photo)
    return (
      <div>
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
