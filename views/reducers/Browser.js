import ACTIONS from '../actions';

const InitialState = {
  info: {},
  events: [],
};

const BrowserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.BROWSER.REGISTER_EVENT_SUCCESS:
      return {
        events: [
          ...state.events,
          {
            event: action.event,
            registered: true,
          },
        ],
      };
    case ACTIONS.BROWSER.UNREGISTER_EVENT_SUCCESS:
      return {
        events: [
          ...state.events,
          {
            event: action.event,
            registered: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default BrowserReducer;
