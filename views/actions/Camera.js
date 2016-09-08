import ACTIONS from '../actions';
import KEYS from '../keys';

const mapCharToRotation = (key) => {
  switch (key) {
    case KEYS.I:
      return ACTIONS.MOVE.UP;
    case KEYS.J:
      return ACTIONS.MOVE.LEFT;
    case KEYS.K:
      return ACTIONS.MOVE.DOWN;
    case KEYS.L:
      return ACTIONS.MOVE.RIGHT;
    case KEYS.ENTER:
      return ACTIONS.RESET;
    default:
      return ACTIONS.IDLE;
  }
};

const cameraRotation = (key) => {
  return {
    type: ACTIONS.CAMERA.ROTATE,
    rotation: mapCharToRotation(key),
  };
};

export default cameraRotation;
