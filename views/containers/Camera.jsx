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
    keyEmitter.on(keys, this.onKeyPressed);
  };

  componentWillUnmount = () => {
    keyEmitter.off(keys, this.onKeyPressed);
  };

  onKeyPressed = (event) => {
    this.props.dispatch(cameraRotation(event));
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
  dispatch: React.PropTypes.func.isRequired,
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
  return {
    dispatch: dispatch,
  };
};


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCamera);

export default Camera;
