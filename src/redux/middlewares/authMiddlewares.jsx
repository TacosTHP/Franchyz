import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as API from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions';
import { infoUserUp } from 'redux/actions/userActions';

const logup = (email, password, type, team) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signUp(email, password, type, team);

    promise.then((response) => {
      if (response.body.errors !== undefined) {
        dispatch(loginFailure(response.body.errors))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.get('Authorization'))
        dispatch(loginSuccess(decoded_token))
        dispatch(infoUserUp(decoded_token))
      };
    });
  };
};

const login = (email, password, type) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signIn(email, password, type);

    promise.then((response) => {
      if (response.body.error !== undefined) {
        dispatch(loginFailure(response.body.error))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.get('Authorization'))
        dispatch(loginSuccess(decoded_token))
        dispatch(infoUserUp(decoded_token))
      };
    });
  };
};

export {login, logup};
