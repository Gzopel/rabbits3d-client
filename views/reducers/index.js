import { combineReducers } from 'redux';
import Browser from './Browser';
import CharacterCamera from './CharacterCamera';

const rootReducer = combineReducers({
  CharacterCamera,
  Browser,
});

export default rootReducer;
