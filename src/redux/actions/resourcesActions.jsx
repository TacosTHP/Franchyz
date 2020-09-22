import { UPDATE_CURRENT_CLUB } from 'redux/types/resourcesTypes';

const updateCurrentClub = ({ club }) => (
  {
    type: UPDATE_CURRENT_CLUB,
    club,
  }
);

export { updateCurrentClub };
