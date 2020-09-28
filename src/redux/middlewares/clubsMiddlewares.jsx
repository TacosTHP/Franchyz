import * as clubAPI from 'services/clubAPI';
import {
  request, requestSuccess, requestFailure, connect,
} from 'redux/actions/authActions';
import { updateClubId } from 'redux/actions/userActions';
import { updateCurrentClub, updateCurrentTeam, updateCurrentAttendances } from 'redux/actions/resourcesActions';
import { updateUserInfo } from 'helpers/reducersHelpers';
import { setupErrorsMessage } from 'helpers/misc';
import prepareAttendancesForFullCalendar from 'helpers/attendancesHelpers';

const getClub = (args) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await clubAPI.getClub(args);
    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.errors);
    }

    dispatch(updateCurrentClub({ club: body }));
    dispatch(updateCurrentTeam({ team: body.teams }));
    const attendances = prepareAttendancesForFullCalendar({ attendancesOwners: body });
    dispatch(updateCurrentAttendances({ attendances }));
    dispatch(requestSuccess({ successMessage: null }));
  } catch (errors) {
    dispatch(requestFailure(setupErrorsMessage(errors)));
  }
};

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
