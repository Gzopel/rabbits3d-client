import ACTIONS from '../actions';
import KEYS from '../keys';

import { nextCameraPositionToPoint, nextPositionToPoint } from '../helpers/Movement';


const mapCharToDirection = (key) => {
  switch (key) {
    case KEYS.I:
      return ACTIONS.MOVE.FOWARD;
    case KEYS.J:
      return ACTIONS.MOVE.LEFT;
    case KEYS.K:
      return ACTIONS.MOVE.BACK;
    case KEYS.L:
      return ACTIONS.MOVE.RIGHT;
    case KEYS.ENTER:
      return ACTIONS.RESET;
    default:
      return ACTIONS.IDLE;
  }
};

export const cameraRotation = key => (dispatch, getState) => {
  const { Character } = getState();
  return dispatch({
    type: ACTIONS.CAMERA.ROTATE_CAMERA,
    direction: mapCharToDirection(key),
    speed: 5,
    characterPosition: Character.characterPosition,
  });
};

export const cameraMoveToPointSuccess = cameraNextPosition => ({
  type: ACTIONS.CAMERA.MOVE_CAMERA,
  cameraNextPosition: cameraNextPosition,
});

export const cameraMoveToPoint = point => (dispatch, getState) => {
  const { Character, Camera } = getState();

  const characterPositionTranslated = Character.characterPosition;
  const cameraNextPosition = {
    lookAt: nextPositionToPoint(Camera.cameraConfig.lookAt, point, Character.config.speed),
    position: nextCameraPositionToPoint(
      Camera.cameraConfig.position, characterPositionTranslated, point, Character.config.speed
    ),
  };

  dispatch(cameraMoveToPointSuccess(cameraNextPosition));
};

export default cameraRotation;
