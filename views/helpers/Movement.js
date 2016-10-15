import ACTIONS from '../actions';

const Three = require('three');

export const nextPosition = (position, action) => {
  // TODO: Add factory for Three Objects
  const speed = action.speed || 1;
  switch (action.direction) {
    case ACTIONS.MOVE.FOWARD:
      return new Three.Vector3(0, 1 * speed, 0).add(position);
    case ACTIONS.MOVE.BACK:
      return new Three.Vector3(0,  -1 * speed, 0).add(position);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(1 * speed, 0, 0).add(position);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(-1 * speed, 0, 0).add(position);
    default:
      return position;
  }
}

export const translateToPointInMap = (point) => {
  const angle = new Three.Vector3(1, 0, 0);
  return point.clone().applyAxisAngle(angle, Math.PI / 2);
}

export const translateToPointInCamera = (point) => {
  const angle = new Three.Vector3(1, 0, 0);
  return point.clone().applyAxisAngle(angle, -Math.PI / 2);
}

// TODO: the math in here could use some love.
export const nextPositionToPoint = (position, point, speed = 1) => {
  const vector = point.clone().sub(position);
  vector.normalize();
  vector.setZ(0);
  vector.multiplyScalar(speed);
  const newPosition = vector.add(position);
  return newPosition.distanceTo(position) < point.distanceTo(position) ? newPosition : point;
}

export const nextPositionToPointToLookAt = (position, point, speed = 1) => {
  const vector = point.clone().sub(position);
  vector.normalize();
  vector.setY(0);
  vector.multiplyScalar(speed);
  const newPosition = vector.add(position);
  return newPosition.distanceTo(position) < point.distanceTo(position) ? newPosition : point;
}

export const nextCameraPositionToPoint = (position, characterPosition, point, speed = 1) => {
  const vector = point.clone().sub(characterPosition);
  vector.normalize();
  vector.setY(0);
  vector.multiplyScalar(speed);
  return vector.add(position);
}

export default nextPositionToPoint;
