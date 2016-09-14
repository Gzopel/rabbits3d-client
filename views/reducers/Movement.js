import ACTIONS from '../actions';

const Three = require('three');

export const nextPosition = (position, action) => {
  // TODO: Add factory for Three Objects
  const speed = action.speed || 1;
  switch (action.direction) {
    case ACTIONS.MOVE.UP:
      return new Three.Vector3(0, 0, 1 * speed).add(position);
    case ACTIONS.MOVE.DOWN:
      return new Three.Vector3(0, 0, -1  * speed).add(position);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(1  * speed, 0, 0).add(position);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(-1 * speed, 0, 0).add(position);
    default:
      return position;
  }
};
