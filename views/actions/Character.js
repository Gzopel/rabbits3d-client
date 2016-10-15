import ACTIONS from '../actions';
import { nextPositionToPoint, rotateToNextPosition } from '../helpers/Movement.js';
import { cameraMoveToPoint } from './Camera';

export const characterMoveToPointSuccess = (characterNextPosition, characterRotation) => ({
  type: ACTIONS.CHARACTER.WALK,
  characterNextPosition: characterNextPosition,
  characterRotation: characterRotation,
});

export const characterMoveToPoint = point => (dispatch, getState) => {
  if (!point) {
    return;
  }

  const { Character } = getState();

  const characterPreviousPosition = Character.characterPosition;
  const characterNextPosition = nextPositionToPoint(
    characterPreviousPosition, point, Character.config.speed
  );

  const characterPreviousRotation = Character.characterRotation;
  const characterRotation = rotateToNextPosition(
    characterPreviousPosition, characterNextPosition, characterPreviousRotation
  );

  const hasCharacterMoved = !Character.characterPosition.equals(characterNextPosition);

  if (hasCharacterMoved) {
    dispatch(characterMoveToPointSuccess(characterNextPosition, characterRotation));
    dispatch(cameraMoveToPoint(point));
  }
};

export default characterMoveToPoint;
