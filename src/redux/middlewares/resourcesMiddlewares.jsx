import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as API from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions';
import { infoUserUp } from 'redux/actions/userActions';
import { resourcesCalls } from 'helpers/reducersHelpers'

function callAPI(callName, args) {
  return async (dispatch) => {
    dispatch(loginRequest())
    let response = await resourcesCalls[callName](args);
    let token = response.headers.get('Authorization')
    if (response.body.errors !== undefined) {
      dispatch(loginFailure(response.body.errors))
    } else {
      console.log(response)
      Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
      let decoded_token = jwt_decode(response.headers.get('Authorization'))
      dispatch(loginSuccess(decoded_token))
      dispatch(infoUserUp(decoded_token))
    } 
  };
};

export { callAPI };
