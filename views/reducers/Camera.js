import ACTIONS from '../actions';
import {nextPosition} from './Movement.js';
const Three = require('three');

const InitialState = {
  cameraConfig: {
    fov: 75,
    near: 1,
    far: 800,
    position: new Three.Vector3(0, 50, -200),
    lookat: new Three.Vector3(0, 0, 0),
  },
};

const CameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CAMERA.ROTATE:
      return {
        cameraConfig: {
          ...state.cameraConfig,
          lookat: nextPosition(state.cameraConfig.lookat, action)
        }
      };
    case ACTIONS.CHARACTER.WALK:
        return {
          cameraConfig: {
            ...state.cameraConfig,
            lookat: nextPosition(state.cameraConfig.lookat, action),
            position: nextPosition(state.cameraConfig.position, action),
          }
        }
    default:
      return state;
  }
};

export default CameraReducer;
