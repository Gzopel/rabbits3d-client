import ACTIONS from '../actions';

const Three = require('three');

export const nextPosition = (position, action) => {
  // TODO: Add factory for Three Objects
  const speed = action.speed || 1;
  switch (action.direction) {
    case ACTIONS.MOVE.FOWARD:
      return new Three.Vector3(0, 0, 1 * speed).add(position);
    case ACTIONS.MOVE.BACK:
      return new Three.Vector3(0, 0, -1 * speed).add(position);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(1 * speed, 0, 0).add(position);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(-1 * speed, 0, 0).add(position);
    default:
      return position;
  }
};


// TODO: the math in here could use some love.
export const nextPositionToPoint = (position, action) => {
  const speed = action.speed || 1;
  const vector = action.point.clone().sub(position);
  vector.normalize();
  vector.setY(0);
  vector.multiplyScalar(speed);
  const newPosition = vector.add(position);
  return newPosition.distanceTo(position) < action.point.distanceTo(position) ?
    newPosition : action.point;
}

export const nextCameraPositionToPoint = (position, action) => {
  const speed = action.speed || 1;
  const vector = action.point.clone().sub(action.characterPosition);
  vector.normalize();
  vector.setY(0);
  vector.multiplyScalar(speed);
  const newPosition = vector.add(position);
  return newPosition;
}


export default nextPosition;
