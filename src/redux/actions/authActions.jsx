import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes.jsx'

function loginRequest(){
  return {
    type: LOGIN_REQUEST,
  }
}

function loginSuccess(decoded_token){
  return {
    type: LOGIN_SUCCESS,
    id: decoded_token['sub'],
    typeUser: decoded_token['scp'],
    email: decoded_token['email'],
    first_name: decoded_token['first_name'],
    last_name: decoded_token['last_name'],
    isAdmin: decoded_token['admin?'],
    club_id: decoded_token['club_id'],
  }
}

function loginFailure(error){
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}

function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS,
  }

}

export {loginRequest, loginSuccess , loginFailure, logoutSuccess}
