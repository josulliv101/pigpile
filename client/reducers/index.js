import { combineReducers } from 'redux';

import api from './api';
import movies from './movies';

export default combineReducers({
  api,
  // movies,
});