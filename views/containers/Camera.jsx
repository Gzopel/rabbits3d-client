import React from 'react';
import { connect } from 'react-redux';
import { cameraRotation } from '../actions/Camera';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';

const ReactTHREE = require('react-three');

const PerspectiveCamera = ReactTHREE.PerspectiveCamera;
const keys = [KEYS.J, KEYS.K, KEYS.L, KEYS.I, KEYS.ENTER];

const rotateCamera = ({ cameraRotation }, event) => {
  cameraRotation(event);
};

class MovingCamera extends React.Component {
  componentDidMount = () => {
    keyEmitter.on(keys, this.onKeyPressed);
  };

  componentWillUnmount = () => {
    keyEmitter.off(keys, this.onKeyPressed);
  };

  onKeyPressed = (event) => {
    rotateCamera(this.props, event);
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
  config: React.PropTypes.shape({
    fov: React.PropTypes.number.isRequired,
    near: React.PropTypes.number.isRequired,
    far: React.PropTypes.number.isRequired,
    position: React.PropTypes.object.isRequired,
    lookat: React.PropTypes.object.isRequired,
  }).isRequired,
  aspect: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.Camera.cameraConfig,
  aspect: state.Browser.size.width / state.Browser.size.height,
});


const Camera = connect(
  mapStateToProps,
  { cameraRotation }
)(MovingCamera);

export default Camera;
