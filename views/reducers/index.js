import { combineReducers } from 'redux';
import Camera from './Camera';
import Browser from './Browser';
import Character from './Character';

const rootReducer = combineReducers({
  Camera,
  Character,
  Browser,
});

export default rootReducer;
