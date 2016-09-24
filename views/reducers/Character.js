import ACTIONS from '../actions';
import { nextPosition, nextPositionToPoint } from './Movement.js';

const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
//  walkTarget: new Three.Vector3(0, 0, 0),
};

const Character = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        characterPosition: nextPositionToPoint(state.characterPosition, action),
     //   walkTarget: action.point,
      };
    default:
      return state;
  }
};

export default Character;
