import ACTIONS from '../actions';
import { characterReducer, characterInitialState } from './Character';
import { cameraReducer, cameraInitialState } from './Camera';

const initialState = {
  ...cameraInitialState,
  ...characterInitialState,
};

const characterCameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK_TO_POINT:
    case ACTIONS.CHARACTER.WALK:
      return {
        ...characterReducer(state, action),
        ...cameraReducer(state, action),
      };
    case ACTIONS.CAMERA.ROTATE:
      if (action.direction === ACTIONS.RESET) {
        return {
          cameraConfig: {
            ...state.cameraConfig,
            lookat: state.characterPosition,
          },
          characterPosition: state.characterPosition,
        };
      }
      return {
        ...cameraReducer(state, action),
        characterPosition: state.characterPosition,
      };
    default:
      return state;
  }
};

export default characterCameraReducer;
