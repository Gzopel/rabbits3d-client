import ACTIONS from '../actions';
import KEYS from '../keys';

export const characterMoveToPoint = point => ({
  type: ACTIONS.CHARACTER.WALK,
  point: point,
  speed: 10,
});

export default characterMoveToPoint;
