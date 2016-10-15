import ACTIONS from '../actions';

const InitialState = {
  elements: {
    camera: null,
    scene: null,
    mouseInput: null,
  },
};

const References = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.REFERENCES.SET_CAMERA_REFERENCE:
      return {
        elements: {
          scene: state.elements.scene,
          mouseInput: state.elements.mouseInput,
          camera: action.reference,
        },
      };
    case ACTIONS.REFERENCES.SET_SCENE_REFERENCE:
      return {
        elements: {
          camera: state.elements.camera,
          mouseInput: state.elements.mouseInput,
          scene: action.reference,
        },
      };
    case ACTIONS.REFERENCES.SET_MOUSE_INPUT_REFERENCE:
      return {
        elements: {
          camera: state.elements.camera,
          scene: state.elements.scene,
          mouseInput: action.reference,
        },
      };
    default:
      return state;
  }
};

export default References;
