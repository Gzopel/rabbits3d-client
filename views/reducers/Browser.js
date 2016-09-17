import ACTIONS from '../actions';

const InitialState = {
  size: {},
  events: [],
};

const BrowserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.BROWSER.REGISTER_EVENT_SUCCESS:
      return {
        size: state.size,
        events: [
          ...state.events, {
            event: action.event,
            registered: true,
          },
        ],
      };
    case ACTIONS.BROWSER.UNREGISTER_EVENT_SUCCESS:
      return {
        size: state.size,
        events: [
          ...state.events, {
            event: action.event,
            registered: false,
          },
        ],
      };
    case ACTIONS.BROWSER.UPDATE_VIEWPORT_SIZE:
      return {
        ...state,
        size: {
          width: action.size.width,
          height: action.size.height,
        },
      };
    default:
     return state;
  }
};

export default BrowserReducer;
