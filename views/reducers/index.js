import { combineReducers } from 'redux';
import Browser from './Browser';
import Camera from './Camera';
import Character from './Character';
import References from './References';

const rootReducer = combineReducers({
  Camera,
  Character,
  Browser,
  References,
});

export default rootReducer;
