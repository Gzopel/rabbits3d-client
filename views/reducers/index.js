import { combineReducers } from 'redux';
import Browser from './Browser';
import Camera from './Camera';
import Character from './Character';

const rootReducer = combineReducers({
  Camera,
  Character,
  Browser,
});

export default rootReducer;
