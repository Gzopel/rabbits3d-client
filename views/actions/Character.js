import ACTIONS from '../actions';

export const characterMoveToPointSuccess = (previousPosition, nextPosition) => ({
  type: ACTIONS.CHARACTER.WALK,
  characterPosition: previousPosition,
  point: nextPosition,
  speed: 10,
});

export const characterMoveToPoint = nextPosition => (dispatch, getState) => {
  if (!nextPosition) {
    return;
  }

  const { Character } = getState();
  const previousPosition = Character.characterPosition;
  const hasCharacterMoved = !previousPosition.equals(nextPosition);

  if (hasCharacterMoved) {
    dispatch(characterMoveToPointSuccess(previousPosition, nextPosition));
  }

};

export default characterMoveToPoint;
