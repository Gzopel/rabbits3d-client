import ACTIONS from '../actions';
import { nextPosition, nextPositionToPoint } from './Movement.js';

const Three = require('three');

export const characterInitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
  walkTarget: new Three.Vector3(0, 0, 0),
};

export const characterReducer = (state = characterInitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      const point = nextPosition(state.characterPosition, action);
      return {
        characterPosition: point,
        walkTarget: point,
      };
    case ACTIONS.CHARACTER.WALK_TO_POINT:
      return {
        characterPosition: nextPositionToPoint(state.characterPosition, action),
        walkTarget: action.point,
      };
    default:
      return state;
  }
};
