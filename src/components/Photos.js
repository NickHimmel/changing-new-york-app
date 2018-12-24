import React, { Component } from 'react';
import { connect } from 'react-redux';

class Photos extends Component {

  render() {
    console.log(this.props.images)
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.photos.isFetching,
    images: state.photos.images,
    comparison: state.photos.comparison
  };
};

export default connect(
  mapStateToProps
)(Photos);
