import * as clubAPI from 'services/clubAPI';
import * as teamAPI from 'services/teamAPI';
import {
  request, requestSuccess, requestFailure, connect,
} from 'redux/actions/authActions';
import { updateCurrentClub } from 'redux/actions/resourcesActions';
import { setupErrorsMessage } from 'helpers/misc';

const createTeam = (args) => async (dispatch) => {
  try {
    dispatch(request());
    let response = await teamAPI.createTeam({ ...args });
    let body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }

    response = await clubAPI.getClub(args);
    body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }

    dispatch(updateCurrentClub({ club: body }));
    dispatch(requestSuccess({ successMessage: 'Your team has been created' }));
  } catch (errors) {
    dispatch(requestFailure(setupErrorsMessage(errors)));
    dispatch(connect('/'));
  }
};

export { createTeam };
