import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS, RESET_ERROR,
} from '../types/authTypes';

const loginRequest = () => (
  {
    type: LOGIN_REQUEST,
  }
);

const loginSuccess = (decodedToken) => (
  {
    type: LOGIN_SUCCESS,
    userType: decodedToken.scp,
  }
);

const loginFailure = (error) => (
  {
    type: LOGIN_FAILURE,
    error,
  }
);

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

const resetError = () => (
  {
    type: RESET_ERROR,
  }
);

export {
  loginRequest, loginSuccess, loginFailure, logoutSuccess, resetError,
};
