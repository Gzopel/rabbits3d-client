import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
  characterRotation: new Three.Euler(Math.PI / 2, 0, 0, 'XYZ'),
  config: {
    speed: 20,
    segments: 32,
    colors: {
      body: 0xffffff,
      eyes: 0x000000,
      innerEars: 0xFF44FF,
    },
    geometries: {
      ears: {
        height: 15,
        radius: 2,
        position: {
          left: new Three.Vector3(-3, 32, 0),
          right: new Three.Vector3(3, 32, 0),
        },
      },
      innerEars: {
        height: 10,
        radius: 1,
        position: {
          left: new Three.Vector3(-3, 32, -2),
          right: new Three.Vector3(3, 32, -2),
        },
      },
      eyes: {
        radius: 2.5,
        position: {
          left: new Three.Vector3(-2.5, 27, -6),
          right: new Three.Vector3(2.5, 27, -6),
        },
      },
      head: {
        radius: 6,
        position: new Three.Vector3(0, 26, 0),
      },
      body: {
        height: 10,
        radius: 7,
        position: new Three.Vector3(0, 15, 0),
      },
      legs: {
        height: 10,
        radius: 4,
        position: new Three.Vector3(0, 5, 0),
      },
    },
  },
};

const Character = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      //const fromV = new Three.Vector3(-1, 0, 0);
      //const toV = state.characterPosition.clone().sub(nextPosition).normalize();
      //toV.set(-toV.z, 0, toV.x);
      /*
      * OK, so this works, but its a hack. We are doing something wrong here but what?
      * */
      //const rotation = new Three.Euler().setFromQuaternion(
      //  new Three.Quaternion().setFromUnitVectors(fromV, toV).normalize(), 'XYZ');
      return {
        characterPosition: action.characterNextPosition,
        characterRotation: state.characterRotation,
        config: state.config,
      };
    default:
      return state;
  }
};

export default Character;
