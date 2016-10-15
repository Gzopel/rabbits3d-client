import ACTIONS from '../actions';
import { nextPositionToPoint, translateToPointInMap } from '../helpers/Movement.js';
import { cameraMoveToPoint } from './Camera';

export const characterMoveToPointSuccess = characterNextPosition => ({
  type: ACTIONS.CHARACTER.WALK,
  characterNextPosition: characterNextPosition,
});

export const characterMoveToPoint = point => (dispatch, getState) => {
  if (!point) {
    return;
  }

  const { Character } = getState();

  const characterPreviousPosition = Character.characterPosition;
  const characterNextPosition = nextPositionToPoint(
    characterPreviousPosition, translateToPointInMap(point), Character.config.speed
  );

  const hasCharacterMoved = !Character.characterPosition.equals(characterNextPosition);

  if (hasCharacterMoved) {
    dispatch(characterMoveToPointSuccess(characterNextPosition));
    dispatch(cameraMoveToPoint(point));
  }
};

export default characterMoveToPoint;
