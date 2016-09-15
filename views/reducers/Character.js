import ACTIONS from '../actions';
import {nextPosition} from './Movement.js';
const Three = require('three');

export const CharacterInitialState = {
  characterPosition: new Three.Vector3(0, 0, 0)
};

export const CharacterReducer = (state = CharacterInitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        characterPosition:  nextPosition(state.characterPosition, action),
      };
    default:
      return state;
  }
};
