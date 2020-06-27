import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes.jsx'

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}

const loginSuccess = (decodedToken) => {
  return {
    type: LOGIN_SUCCESS,
    userType: decodedToken['scp'],
  }
}

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export {loginRequest, loginSuccess , loginFailure, logoutSuccess}
