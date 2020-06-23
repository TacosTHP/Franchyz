import { combineReducers } from 'redux'
import authReducer from './authReducer.jsx'
import userReducer from './userReducer.jsx'

const rootReducer = combineReducers({
  userReducer,
  authReducer
})

export default rootReducer
