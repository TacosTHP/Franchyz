import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import resourcesReducer from './resourcesReducer';

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  resourcesReducer,
});

export default rootReducer;
