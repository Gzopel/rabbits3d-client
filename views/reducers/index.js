import { combineReducers } from 'redux';
import Camera from './Camera';
import Browser from './Browser';

const rootReducer = combineReducers({
  Camera,
  Browser,
});

export default rootReducer;
