import ACTIONS from '../actions';
import { nextPositionToPoint } from './Movement.js';

const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
  //walkTarget: new Three.Vector3(0, 0, 0),
  //characterRotation: new Three.Euler(0,0,0,'XYZ'),
};

const Character = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      /*
      const point = nextPosition(state.characterPosition, action);
      const fromV = new Three.Vector3(-1, 0, 0);
      let toV = state.characterPosition.clone().sub(point).normalize();
      toV.set(-toV.z,0,toV.x);*/
      /*
      * OK, so this works, but its a hack. We are doing something wrong here but what?
      * *//*
      const r = new Three.Euler().setFromQuaternion(new Three.Quaternion().setFromUnitVectors(fromV, toV).normalize(),'XYZ');
      return {
        characterPosition: point,
        walkTarget: point,
        characterRotation:r,
      };*/
      return {
        characterPosition: nextPositionToPoint(state.characterPosition, action),
     //   walkTarget: action.point,
      };
    default:
      return state;
  }
};

export default Character;
