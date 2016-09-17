import React from 'react';
import { connect } from 'react-redux';
import { cameraRotation } from '../actions/Camera';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';

const ReactTHREE = require('react-three');

const PerspectiveCamera = ReactTHREE.PerspectiveCamera;
const keys = [KEYS.J, KEYS.K, KEYS.L, KEYS.I, KEYS.ENTER];

class MovingCamera extends React.Component {
  componentDidMount = () => {
    this.props.onMount();
  };

  componentWillUnmount = () => {
    this.props.onUnmount();
  };

  render() {
    const cameraConfig = {
      ...this.props.config,
      aspect: this.props.aspect,
    };

    return (
      <PerspectiveCamera name="maincamera" {...cameraConfig} />
    );
  }
}

MovingCamera.propTypes = {
  onUnmount: React.PropTypes.func.isRequired,
  onMount: React.PropTypes.func.isRequired,
  config: React.PropTypes.shape({
    fov: React.PropTypes.number.isRequired,
    near: React.PropTypes.number.isRequired,
    far: React.PropTypes.number.isRequired,
    position: React.PropTypes.object.isRequired,
    lookat: React.PropTypes.object.isRequired,
  }).isRequired,
  aspect: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    config: state.CharacterCamera.cameraConfig,
    aspect: state.Browser.size.width / state.Browser.size.height,
  };
};

const mapDispatchToProps = (dispatch) => {
  const onKeyPressed = (event) => { dispatch(cameraRotation(event)); };
  return {
    onMount: () => { keyEmitter.on(keys, onKeyPressed); },
    onUnmount: () => { keyEmitter.off(keys, onKeyPressed); },
  };
};


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCamera);

export default Camera;
