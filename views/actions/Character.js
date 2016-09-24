import ACTIONS from '../actions';
import KEYS from '../keys';

export const characterMoveToPoint = (from, target) => ({
  type: ACTIONS.CHARACTER.WALK,
  characterPosition: from,
  point: target,
  speed: 10,
});

export default characterMoveToPoint;
