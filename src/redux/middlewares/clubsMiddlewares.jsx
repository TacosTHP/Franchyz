import * as clubAPI from 'services/clubAPI';
import { loginRequest, loginFailure } from 'redux/actions/authActions';
import { updateClubId } from 'redux/actions/userActions';
import { updateUserInfo } from 'helpers/reducersHelpers';

const createClub = (args) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await clubAPI.createClub(args);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }

    updateUserInfo({ clubId: body.id });
    dispatch(updateClubId({ clubId: body.id }));
  } catch (error) {
    console.log(error)
  }
};

export { createClub };
