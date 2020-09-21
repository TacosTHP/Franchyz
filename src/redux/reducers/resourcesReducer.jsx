import { resourcesRefresher } from 'helpers/reducersHelpers';
import { UPDATE_CURRENT_CLUB, UPDATE_CURRENT_TEAMS, ADD_TEAM_TO_CURRENT_TEAMS } from 'redux/types/resourcesTypes';

const initialState = resourcesRefresher();

const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CLUB:
      return {
        ...state,
        currentClub: action.club,
      };
    case UPDATE_CURRENT_TEAMS:
      return {
        ...state,
        currentTeams: action.teams,
      };
    case ADD_TEAM_TO_CURRENT_TEAMS:

      return {
        ...state,
        currentTeams: state.currentTeams.concat(action.team),
      };
    default:
      return {
        ...state,
      };
  }
};

export default resourcesReducer;
