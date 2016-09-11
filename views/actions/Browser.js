import ACTIONS from '../actions';

const registerEventSuccess = (event) => ({
  type: ACTIONS.BROWSER.REGISTER_EVENT_SUCCESS,
  event: event,
});

const unregisterEventSuccess = (event) => ({
  type: ACTIONS.BROWSER.UNREGISTER_EVENT_SUCCESS,
  event: event,
});

export const addEventListener = (componentName, eventName, handler) => {
  window.addEventListener(eventName, handler);
  return registerEventSuccess(eventName);
};

export const removeEventListener = (componentName, eventName, handler) => {
  window.removeEventListener(eventName, handler);
  return unregisterEventSuccess(eventName);
};
