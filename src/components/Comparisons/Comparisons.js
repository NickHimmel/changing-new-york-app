import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/actions.js'
import Photo from './Photo/Photo.js';
import Text from './Text/Text.js';
import Footnotes from './Footnotes/Footnotes.js';
import Loading from '../Loading/Loading.js'
import styles from './Comparisons.module.css';
import logo from '../../logos/baseline-close-24px.svg';

class Comparisons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: 'e3c8e2d0-c60c-012f-d813-58d385a7bc34',
      open: true
    }
  }

  componentDidMount() {
    this.props.fetchPhotos(this.state.uuid);
  }

  componentDidUpdate(prevProps) {
    if (this.props.uuid !== prevProps.uuid) {
      this.setState(state => ({
        open: true
      }))
    };
  }

  renderComparisons = () => {
    if (this.props.isFetching || this.props.isFetching === undefined) {
      return (
        <Loading />
      );
    }
    console.log(this.props.uuid)
    return (
      <div className={styles.inner}>
        <button className={styles.button} onClick={this.handleClick}><img src={logo} alt="logo"/></button>
        <Photo data={this.props.then_photo}/>
        <Photo data={this.props.now_photo}/>
        <Text data={this.props.comparison.text}/>
        <Footnotes data={this.props.comparison.footnotes}/>
      </div>
    );
  }

  handleClick = () => {
    document.getElementById("active").removeAttribute("id");
    this.setState(state => ({
      open: false
    }))
  }

  render() {
    const isOpen = this.state.open;

    return (
      <div className={styles.container}>
        {isOpen &&
          this.renderComparisons()
        }
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
)(Comparisons);
