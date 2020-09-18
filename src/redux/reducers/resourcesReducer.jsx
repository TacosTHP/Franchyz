import { resourcesRefresher } from 'helpers/reducersHelpers';
import { UPDATE_CURRENT_CLUB } from 'redux/types/resourcesTypes';

const initialState = resourcesRefresher();

const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CLUB:
      return {
        ...state,
        currentClub: action.club,
      };
    default:
      return {
        ...state,
      };
  }
};

export default resourcesReducer;
