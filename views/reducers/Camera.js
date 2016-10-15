import ACTIONS from '../actions';
import { nextPosition, nextPositionToPoint, nextCameraPositionToPoint } from './Movement.js';

const Three = require('three');

const InitialState = {
  cameraConfig: {
    fov: 75,
    near: 1,
    far: 800,
    position: new Three.Vector3(0, 50, -200),
    lookAt: new Three.Vector3(0, 0, 0),
  },
};

const Camera = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CAMERA.ROTATE:
      if (action.direction === ACTIONS.RESET) {
        return {
          cameraConfig: {
            ...state.cameraConfig,
            lookAt: action.characterPosition,
          },
        };
      }
      return {
        cameraConfig: {
          ...state.cameraConfig,
          lookAt: nextPosition(state.cameraConfig.lookAt, action),
        },
      };
    case ACTIONS.CHARACTER.WALK:
      return {
        cameraConfig: {
          ...state.cameraConfig,
          lookAt: nextPositionToPoint(state.cameraConfig.lookAt, action),
          position: nextCameraPositionToPoint(state.cameraConfig.position, action),
        },
      };
    default:
      return state;
  }
};

export default Camera;