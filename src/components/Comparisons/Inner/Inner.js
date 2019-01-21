import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../../actions/actions.js'
import Photo from '../Photo/Photo.js';
import Text from '../Text/Text.js';
import Footnotes from '../Footnotes/Footnotes.js';
import Loading from '../../Loading/Loading.js'
import styles from './Inner.module.css';

class Inner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: 'e3c8e2d0-c60c-012f-d813-58d385a7bc34'
    }
  }

  componentDidMount() {
    this.props.fetchPhotos(this.state.uuid);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.isFetching || this.props.isFetching === undefined ? (
          <Loading />
        ) : (
          <div className={styles.inner}>
            <Photo data={this.props.then_photo}/>
            <Photo data={this.props.now_photo}/>
            <Text data={this.props.comparison.text}/>
            <Footnotes data={this.props.comparison.footnotes}/>
          </div>
        )}
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

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPhotos
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inner);
