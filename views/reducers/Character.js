import ACTIONS from '../actions';
import {nextPosition} from './Movement.js';
const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0)
};


const CharacterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        characterPosition:  nextPosition(state.characterPosition, action),
      };
    default:
      return state;
  }
};

export default CharacterReducer;
