import { authRefresher } from 'helpers/reducersHelpers';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, DISPLAY_SUCCESS_MESSAGE,
  RESET_SUCCESS_MESSAGE, RESET_ERROR_MESSAGE, CONNECT, RESET_URL,
} from '../types/authTypes';

const initialState = authRefresher();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        userType: action.userType,
        successMessage: 'you are connected',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
        userType: '',
        successMessage: 'You successfully logged out',
      };
    case DISPLAY_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.successMessage,
      };
    case RESET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: null,
      };
    case RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };
    case CONNECT:
      return {
        ...state,
        url: action.url,
      };
    case RESET_URL:
      return {
        ...state,
        url: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
