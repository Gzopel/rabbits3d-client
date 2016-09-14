import ACTIONS from '../actions';
import {nextPosition} from './Movement.js'
const Three = require('three');

const InitialState = {
  config: {
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
      if (action.direction == ACTIONS.RESET){
        return {
          config: {
            ...state.config,
          //  lookat: get the character position some how
          }
        }
      }
      return {
        config: {
          ...state.config,
          lookat: nextPosition(state.config.lookat, action)
        }
      };
    case ACTIONS.CHARACTER.WALK:
        return {
          config: {
            ...state.config,
            lookat: nextPosition(state.config.lookat, action),
            position: nextPosition(state.config.position, action),
          }
        }
    default:
      return state;
  }
};

export default CameraReducer;
