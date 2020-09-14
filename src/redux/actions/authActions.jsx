import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS,
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

export {
  loginRequest, loginSuccess, loginFailure, logoutSuccess,
};
