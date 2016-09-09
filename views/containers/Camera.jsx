import { connect } from 'react-redux';
import MovingCamera from '../components/MovingCamera';

const THREE = require('three');

const mapStateToProps = (state) => {
  return {
    config: {
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 1,
      far: 800,
      position: new THREE.Vector3(400, 0, 400),
      lookat: state.Camera.rotationVector,
    },
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
