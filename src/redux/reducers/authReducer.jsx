import { authRefresher } from 'helpers/reducersHelpers';
import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, DISPLAY_SUCCESS_MESSAGE,
  RESET_SUCCESS_MESSAGE, RESET_ERROR_MESSAGE, CONNECT, RESET_URL,
} from '../types/authTypes';

const initialState = authRefresher();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.successMessage,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        userType: action.userType,
        successMessage: 'you are connected',
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
