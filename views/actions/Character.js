import ACTIONS from '../actions';
import { nextPositionToPoint, nextCameraPositionToPoint, translateToPointInMap, translateToPointInCamera, nextPositionToPointToLookAt } from '../helpers/Movement.js';

export const characterMoveToPointSuccess = (characterNextPosition, cameraNextPosition) => ({
  type: ACTIONS.CHARACTER.WALK,
  characterNextPosition: characterNextPosition,
  cameraNextPosition: cameraNextPosition,
});

export const characterMoveToPoint = point => (dispatch, getState) => {
  if (!point) {
    return;
  }

  const { Character, Camera } = getState();

  const characterPreviousPosition = Character.characterPosition;
  const characterNextPosition = nextPositionToPoint(
    characterPreviousPosition, translateToPointInMap(point), Character.config.speed
  );

  const cameraLookAtPosition = Camera.cameraConfig.lookAt;
  const cameraPreviousPosition = Camera.cameraConfig.position;
  const cameraNextPosition = {
    lookAt: nextPositionToPointToLookAt(cameraLookAtPosition, point, Character.config.speed),
    position: nextCameraPositionToPoint(
      cameraPreviousPosition, translateToPointInCamera(characterNextPosition), point, Character.config.speed
    ),
  };

  const hasCharacterMoved = !Character.characterPosition.equals(characterNextPosition);

  if (hasCharacterMoved) {
    dispatch(characterMoveToPointSuccess(characterNextPosition, cameraNextPosition));
  }
};

export default characterMoveToPoint;
