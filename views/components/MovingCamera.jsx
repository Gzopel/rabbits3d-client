import React from 'react';
import { cameraRotation } from '../actions/Camera';

const ReactTHREE = require('react-three');

const PerspectiveCamera = ReactTHREE.PerspectiveCamera;

class MovingCamera extends React.Component {
  componentDidMount = () => {
    // TODO: Move browser events to browser action/reducer
    window.addEventListener('keypress', this.rotateCamera);
  };

  componentWillUnmount = () => {
    // TODO: Move browser events to browser action/reducer
    window.removeEventListener('keypress', this.rotateCamera);
  };

  rotateCamera = (event) => {
    this.props.dispatch(cameraRotation(event.keyCode));
  };

  render() {
    return (
      <PerspectiveCamera name="maincamera" {...this.props.config} />
    );
  }
}

MovingCamera.propTypes = {
  config: React.PropTypes.shape({
    fov: React.PropTypes.number.isRequired,
    aspect: React.PropTypes.number.isRequired,
    near: React.PropTypes.number.isRequired,
    far: React.PropTypes.number.isRequired,
    position: React.PropTypes.object.isRequired,
    lookat: React.PropTypes.object.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default MovingCamera;
