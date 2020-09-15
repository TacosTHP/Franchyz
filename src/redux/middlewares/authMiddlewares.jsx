import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as authAPI from 'services/authAPI';
import {
  loginRequest, loginSuccess, loginFailure, connect,
  logoutSuccess,
} from 'redux/actions/authActions';
import { infoUserUp, infoUserDown } from 'redux/actions/userActions';
import { setUserInfo } from 'helpers/reducersHelpers';
import { setupErrorsMessage } from 'helpers/misc';

const logup = (input) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await authAPI.signUp(input);

    if (!response.ok) {
      throw response;
    }

    Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
    const decodedToken = jwtDecode(response.headers.get('Authorization'));
    setUserInfo(decodedToken);
    dispatch(loginSuccess(decodedToken));
    dispatch(infoUserUp(decodedToken));
    if (decodedToken.scp === 'coach') {
      dispatch(connect('dashboardAdmin'));
    } else {
      dispatch(connect('dashboardPlayer'));
    }
  } catch (response) {
    const body = await response.json();
    if (body.error !== undefined) {
      dispatch(loginFailure(body.error));
    } else {
      dispatch(loginFailure(setupErrorsMessage(body.errors)));
    }
  }
};

const login = (input) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await authAPI.signIn(input);

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.error);
    }

    Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
    const decodedToken = jwtDecode(response.headers.get('Authorization'));
    setUserInfo(decodedToken);
    dispatch(loginSuccess(decodedToken));
    dispatch(infoUserUp(decodedToken));
    if (decodedToken.scp === 'coach') {
      dispatch(connect('/dashboardAdmin'));
    } else {
      dispatch(connect('/dashboardPlayer'));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const logout = ({ userType }) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await authAPI.signOut({ userType });

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.error);
    }

    dispatch(logoutSuccess());
    dispatch(infoUserDown());
    Cookies.remove('token', { sameSite: 'lax' });
    Cookies.remove('userInfo', { sameSite: 'lax' });
    dispatch(connect('/'));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export { login, logup, logout };
