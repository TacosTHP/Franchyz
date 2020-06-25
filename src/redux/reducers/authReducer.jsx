import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes'
import { authRefresher } from 'helpers/reducersHelpers'

const initialState = authRefresher()

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      } 
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        typeUser: action.typeUser,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
        typeUser: ''
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer
