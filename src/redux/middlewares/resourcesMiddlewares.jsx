import * as clubAPI from 'services/clubAPI';
import {loginRequest, loginFailure} from 'redux/actions/authActions';
import { updateClubId } from 'redux/actions/userActions';
import { updateUserInfo } from 'helpers/reducersHelpers'
import { message} from 'antd';

const createClub = (args) => {
  return async (dispatch) => {

    dispatch(loginRequest())
    let response = await clubAPI.createClub(args)

    if (response.status !== 201) {
      dispatch(loginFailure(response.body.errors))
    } else {
      let body = await response.json()
      dispatch(updateClubId(body.id), message.success('You added a new club', 2.5))
      updateUserInfo({clubId: body.id})
      return response.status
    } 
  };
};

export { createClub };
