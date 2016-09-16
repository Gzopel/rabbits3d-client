import ACTIONS from '../actions';
import KEYS from '../keys';

const mapCharToRotation = (key) => {
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

export const cameraRotation = (key) => {
    return {
        type: ACTIONS.CAMERA.ROTATE,
        direction: mapCharToRotation(key),
        speed: 5,
    };
};

export default cameraRotation;
