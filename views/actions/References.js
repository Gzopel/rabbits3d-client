import ACTIONS from '../actions';

export const setCameraReference = cameraReference => ({
  type: ACTIONS.REFERENCES.SET_CAMERA_REFERENCE,
  reference: cameraReference,
});

export const setSceneReference = sceneReference => ({
  type: ACTIONS.REFERENCES.SET_SCENE_REFERENCE,
  reference: sceneReference,
});

export const setMouseInputReference = mouseInputReference => ({
  type: ACTIONS.REFERENCES.SET_MOUSE_INPUT_REFERENCE,
  reference: mouseInputReference,
});
