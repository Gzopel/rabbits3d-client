import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  rotationVector: new Three.Vector3(0, 0, 0),
};

const mapRotationVectorFromAction = (state, action) => {
  // TODO: Add factory for Three Objects

  const speed = action.speed || 1;
  switch (action.rotation) {
    case ACTIONS.MOVE.UP:
      return state.rotationVector.add(new Three.Vector3(0, 1 * speed, 0));
    case ACTIONS.MOVE.DOWN:
      return state.rotationVector.add(new Three.Vector3(0, -1  * speed, 0));
    case ACTIONS.MOVE.LEFT:
      return state.rotationVector.add(new Three.Vector3(-1  * speed, 0, 0));
    case ACTIONS.MOVE.RIGHT:
      return state.rotationVector.add(new Three.Vector3(1 * speed, 0, 0));
    case ACTIONS.MOVE.RESET:
    default:
      return new Three.Vector3(0, 0, 0);
  }
};

const CameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CAMERA.ROTATE:
      return {
        rotationVector: mapRotationVectorFromAction(state, action),
      };
    default:
      return state;
  }
};

export default CameraReducer;
