import { combineReducers } from 'redux';
import userReducer from './userReducer';

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;