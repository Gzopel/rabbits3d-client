import ACTIONS from '../actions';
import { nextPositionToPoint } from './Movement.js';

const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
  characterRotation: new Three.Euler(Math.PI / 2, 0, 0, 'XYZ'),
  config: {
    segments: 32,
    colors: {
      body: 0xffffff,
      eyes: 0x000000,
      innerEars: 0xFF44FF,
    },
    positions: {
      ears: {
        left: new Three.Vector3(-3, 32, 0),
        right: new Three.Vector3(3, 32, 0),
      },
      innerEars: {
        left: new Three.Vector3(-3, 32, -2),
        right: new Three.Vector3(3, 32, -2),
      },
      eyes: {
        left: new Three.Vector3(-2.5, 27, -6),
        right: new Three.Vector3(2.5, 27, -6),
      },
      head: new Three.Vector3(0, 26, 0),
      body: new Three.Vector3(0, 15, 0),
      legs: new Three.Vector3(0, 5, 0),
    },
    sizes: {
      ears: {
        height: 15,
        radius: 2,
      },
      innerEars: {
        height: 10,
        radius: 1,
      },
      eyes: {
        radius: 2.5,
      },
      head: {
        radius: 6,
      },
      body: {
        height: 10,
        radius: 7,
      },
      legs: {
        height: 10,
        radius: 4,
      },
    },
  },
};

const Character = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      const nextPosition = nextPositionToPoint(state.characterPosition, action);
      const fromV = new Three.Vector3(-1, 0, 0);
      const toV = state.characterPosition.clone().sub(nextPosition).normalize();
      toV.set(-toV.z, 0, toV.x);
      /*
      * OK, so this works, but its a hack. We are doing something wrong here but what?
      * */
      const rotation = new Three.Euler().setFromQuaternion(
        new Three.Quaternion().setFromUnitVectors(fromV, toV).normalize(), 'XYZ');
      return {
        characterPosition: nextPosition,
        characterRotation: rotation,
      };
    default:
      return state;
  }
};

export default Character;
