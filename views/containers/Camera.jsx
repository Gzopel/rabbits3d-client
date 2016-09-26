import React from 'react';
import React3 from 'react-three-renderer';
import { connect } from 'react-redux';

import storeWrapper from './storeWrapper';
import { cameraRotation } from '../actions/Camera';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';

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
      <perspectiveCamera name="maincamera" {...cameraConfig} />
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
    lookAt: React.PropTypes.object.isRequired,
  }).isRequired,
  aspect: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.Camera.cameraConfig,
  aspect: state.Browser.size.width / state.Browser.size.height,
});

const Camera = connect(
  mapStateToProps
)(MovingCamera);

export default storeWrapper(Camera);
