import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js';
import Button from './Button.js';
import Loading from '../Loading.js';
import Photo from './Photo.js';
import Caption from './Caption.js';
import Text from './Text.js';
import Footnotes from './Footnotes.js';

class Comparison extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: 'e3c8e2d0-c60c-012f-d813-58d385a7bc34'
    }
  }

  componentDidMount() {
    if (window.innerWidth > 760) this.props.fetchPhotos(this.state.uuid);
  }

  renderComparison = () => {
    if (this.props.isFetching === undefined) {
      return (
        null
      );
  } else if (this.props.isFetching) {
      return (
        <Loading />
      );
    }
    return (
      <div id="comparison-window" className='comparison__inner'>
        <Button onClick={this.handleClick}/>
        <Photo data={this.props.then_photo}/>
        <Caption data={this.props.then_photo}/>
        <Photo data={this.props.now_photo}/>
        <Caption data={this.props.now_photo}/>
        <Text data={this.props.comparison.text}/>
        <Footnotes data={this.props.comparison.footnotes}/>
      </div>
    );
  }

  handleClick = () => {
    const modal = document.getElementById("comparison-window");
    modal.classList.add("is-closed");
  }

  render() {

    return (
      <div className='comparison'>
        {this.renderComparison()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.photos.isFetching,
    then_photo: state.photos.then_photo,
    now_photo: state.photos.now_photo,
    comparison: state.photos.comparison,
    uuid: state.photos.uuid
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
)(Comparison);
