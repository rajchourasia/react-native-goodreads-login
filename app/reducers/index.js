import { combineReducers } from 'redux';
import * as usersReducer from './users';

export default combineReducers(Object.assign(
  usersReducer
));
