import {
  LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS,
  DISPLAY_SUCCESS_MESSAGE, RESET_SUCCESS_MESSAGE, RESET_ERROR_MESSAGE,
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

export {
  loginRequest, loginSuccess, loginFailure, logoutSuccess,
  displaySuccessMessage, resetSuccessMessage, resetErrorMessage,
};
