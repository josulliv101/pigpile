import { combineReducers } from 'redux';
import { reducer as asyncWorkReducer } from '@josulliv101/connect-async-work';

export default combineReducers({
  asyncWork: asyncWorkReducer,
});