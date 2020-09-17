import * as clubAPI from 'services/clubAPI';
import {
  request, requestSuccess, requestFailure, connect,
} from 'redux/actions/authActions';
import { updateClubId } from 'redux/actions/userActions';
import { updateUserInfo } from 'helpers/reducersHelpers';
import { setupErrorsMessage } from 'helpers/misc';

const createClub = (args) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await clubAPI.createClub(args);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }

    updateUserInfo({ clubId: body.id });
    dispatch(updateClubId({ clubId: body.id }));
    dispatch(connect('dashboardAdmin'));
  } catch (errors) {
    dispatch(requestFailure(setupErrorsMessage(errors)));
    dispatch(connect('/'));
  }
};

const editClub = ({ clubId, input }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await clubAPI.editClub({ clubId, input });
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }
    dispatch(updateCurrentClub({ club: body }));
    dispatch(requestSuccess({ successMessage: 'Your club is updated' }));
    dispatch(connect('dashboardAdmin'));
  } catch (errors) {
    dispatch(requestFailure(setupErrorsMessage(errors)));
  }
};

export { getClub, createClub, editClub };
