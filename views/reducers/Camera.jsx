const Three = require('three');

const mapRotationToVector = (rotation) => {
  switch (rotation) {
    case ACTIONS.MOVE.UP:
      return new Three.Vector3(0, 1, 0);
    case ACTIONS.MOVE.DOWN:
      return new Three.Vector3(0, -1, 0);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(-1, 0, 0);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(1, 0, 0);
    default:
      return new Three.Vector3(0, 0, 0);
  }
}

//TODO: Add factory for Three Objects

const CameraReducer = (state = new Three.Vector3(0, 0, 0), action) => {
  switch (action.type) {
    case 'ROTATE_CAMERA':
      return {
        rotationVector: state.rotationVector.add(mapRotationToVector(action.rotation))
      }
    default:
      return state
  }
}

export default CameraReducer;