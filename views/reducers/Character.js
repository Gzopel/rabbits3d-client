import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  position: new Three.Vector3(0, 0, 0)
};

const nextPosition = (state, action) => {
  // TODO: Add factory for Three Objects
  const speed = action.speed || 1;
  switch (action.direction) {
    case ACTIONS.MOVE.UP:
      return new Three.Vector3(0, 0, 1 * speed).add(state.position);
    case ACTIONS.MOVE.DOWN:
      return new Three.Vector3(0, 0, -1  * speed).add(state.position);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(-1  * speed, 0, 0).add(state.position);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(1 * speed, 0, 0).add(state.position);
    default:
      return state.position;
  }
};

const CharacterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CHARACTER.WALK:
      return {
        position:  nextPosition(state, action),
      };
    default:
      return state;
  }
};

export default CharacterReducer;
