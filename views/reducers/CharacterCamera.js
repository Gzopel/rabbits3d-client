import ACTIONS from '../actions';
import {nextPosition} from './Movement.js';
import Character from './Character';
import Camera from './Camera';
const Three = require('three');

const InitialState = {
  cameraConfig: {
    fov: 75,
    near: 1,
    far: 800,
    position: new Three.Vector3(0, 50, -200),
    lookat: new Three.Vector3(0, 0, 0),
  },
  characterPosition: new Three.Vector3(0, 0, 0)
};


const CharacterCameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        ...Character(state,action),
        ...Camera(state,action)
      };
    case ACTIONS.CAMERA.ROTATE:
      if (action.direction == ACTIONS.RESET){
        return {
          cameraConfig: {
            ...state.cameraConfig,
            lookat: state.characterPosition
          },
          characterPosition:state.characterPosition
        }
      }
      return {
        ...Camera(state,action),
        characterPosition:state.characterPosition
      };
    default:
      return state;
  }
};

export default CharacterCameraReducer;
