import ACTIONS from '../actions';
import KEYS from '../keys';

const mapCharToDirection = (key) => {
    switch (key) {
        case KEYS.W:
            return ACTIONS.MOVE.FOWARD;
        case KEYS.A:
            return ACTIONS.MOVE.LEFT;
        case KEYS.S:
            return ACTIONS.MOVE.BACK;
        case KEYS.D:
            return ACTIONS.MOVE.RIGHT;
        default:
            return ACTIONS.IDLE;
    }
};

export const characterMove = (key) => {
    return {
        type: ACTIONS.CHARACTER.WALK,
        direction: mapCharToDirection(key),
        speed: 10,
    };
};

export default characterMove;
