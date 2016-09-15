import ACTIONS from '../actions';
import {nextPosition} from './Movement.js';
import {CharacterReducer ,CharacterInitialState} from './Character';
import {CameraReducer ,CameraInitialState} from './Camera';
const Three = require('three');

const InitialState = {
  ...CameraInitialState,
  ...CharacterInitialState
};


const CharacterCameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        ...CharacterReducer(state,action),
        ...CameraReducer(state,action)
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
        ...CameraReducer(state,action),
        characterPosition:state.characterPosition
      };
    default:
      return state;
  }
};

export default CharacterCameraReducer;
