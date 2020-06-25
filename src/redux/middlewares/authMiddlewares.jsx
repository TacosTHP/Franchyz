import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as authAPI from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions';
import { infoUserUp } from 'redux/actions/userActions';
import { setUserInfo } from 'helpers/reducersHelpers';

const logup = (email, password, type, team) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    let response = await authAPI.signUp(email, password, type, team);

    if (response.status !== 201) {
      dispatch(loginFailure(response.body.errors))
    } else {
      Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
      let decodedToken = jwt_decode(response.headers.get('Authorization'))
      setUserInfo(decodedToken)
      dispatch(loginSuccess(decodedToken))
      dispatch(infoUserUp(decodedToken))
      return response.status
    };
  };
};

const login = (email, password, type) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    let response = await authAPI.signIn(email, password, type);

      if (response.status !== 201) {
        dispatch(loginFailure(response.body.error))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decodedToken = jwt_decode(response.headers.get('Authorization'))
        setUserInfo(decodedToken)
        dispatch(loginSuccess(decodedToken))
        dispatch(infoUserUp(decodedToken))
        return response.status
      };
  };
};

export {login, logup};
