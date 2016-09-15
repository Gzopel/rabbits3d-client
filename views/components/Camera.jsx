import React from 'react';
import { cameraRotation } from '../actions/Camera';
import * as BrowserActions from '../actions/Browser';

const ReactTHREE = require('react-three');

const PerspectiveCamera = ReactTHREE.PerspectiveCamera;

class Camera extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(
      BrowserActions.addEventListener('Camera', 'keypress', this.rotateCamera)
    );
  };

  componentWillUnmount = () => {
    this.props.dispatch(
      BrowserActions.removeEventListener('Camera', 'keypress', this.rotateCamera)
    );
  };

  rotateCamera = (event) => {
    this.props.dispatch(cameraRotation(event.charCode));
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

Camera.propTypes = {
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

export default Camera;
