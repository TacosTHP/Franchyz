import * as clubAPI from 'services/clubAPI';
import * as teamAPI from 'services/teamAPI';
import {
  request, requestSuccess, requestFailure, connect,
} from 'redux/actions/authActions';
import { updateCurrentClub } from 'redux/actions/resourcesActions';
import { updateCurrentTeam } from 'redux/actions/resourcesActions';
import { setupErrorsMessage } from 'helpers/misc';

const getTeam = ({ clubId, teamId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await teamAPI.getTeam(clubId, teamId);

    if (typeof response !== 'object') {
      throw new Error(`HTTP status ${response.status}`);
    }

    dispatch(updateCurrentTeam({ team: response }));
    dispatch(requestSuccess({ successMessage: null }));
  } catch (error) {
    dispatch(requestFailure(setupErrorsMessage(error)));
    dispatch(connect('/dashboardAdmin'));
  }
};

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

export { createTeam, getTeam };
