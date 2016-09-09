import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  rotationVector: new Three.Vector3(0, 0, 0),
};

const mapRotationToVector = (rotation) => {
  switch (rotation) {
    // TODO: I know these aren't actions but once cleaned up we should use them
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
};

// TODO: Add factory for Three Objects

const CameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CAMERA.ROTATE:
      // TODO: Make sure this is immutable
      if (action.rotation === ACTIONS.RESET) {
        return {
          rotationVector: mapRotationToVector(action.rotation),
        }
      }

      return {
        rotationVector: state.rotationVector.add(mapRotationToVector(action.rotation)),
      };
    default:
      return state;
  }
};

export default CameraReducer;
