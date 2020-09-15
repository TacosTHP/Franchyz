import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS,
  DISPLAY_SUCCESS_MESSAGE, RESET_SUCCESS_MESSAGE, RESET_ERROR_MESSAGE,
  CONNECT, RESET_URL,
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
    successMessage: `You successfully connected to your account as a ${decodedToken.scp}.`,
  }
);

const loginFailure = (errorMessage) => (
  {
    type: LOGIN_FAILURE,
    errorMessage,
  }
);

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

const displaySuccessMessage = (successMessage) => (
  {
    type: DISPLAY_SUCCESS_MESSAGE,
    successMessage,
  }
);

const resetSuccessMessage = () => (
  {
    type: RESET_SUCCESS_MESSAGE,
  }
);

const resetErrorMessage = () => (
  {
    type: RESET_ERROR_MESSAGE,
  }
);

const connect = (url) => (
  {
    type: CONNECT,
    url,
  }
);

const resetUrl = () => (
  {
    type: RESET_URL,
  }
);

export {
  loginRequest, loginSuccess, loginFailure, logoutSuccess,
  displaySuccessMessage, resetSuccessMessage, resetErrorMessage,
  connect, resetUrl,
};
