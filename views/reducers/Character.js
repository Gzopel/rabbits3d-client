import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  characterPosition: new Three.Vector3(0, 0, 0),
  characterRotation: new Three.Euler(0, 0, 0, 'XYZ'),
  config: {
    speed: 20,
    segments: 32,
    colors: {
      body: 0xffffff,
      eyes: 0x000000,
      innerEars: 0xffb9c4,
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
      return {
        characterPosition: action.characterNextPosition,
        characterRotation: action.characterRotation,
        config: state.config,
      };
    default:
      return state;
  }
};

export default Character;
