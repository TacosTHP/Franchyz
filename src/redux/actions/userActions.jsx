import { INFO_USER_UP, INFO_USER_DOWN, UPDATE_CLUB_ID } from '../types/userTypes';

const infoUserUp = (decodedToken) => (
  {
    type: INFO_USER_UP,
    id: decodedToken.sub,
    email: decodedToken.email,
    firstName: decodedToken.first_name,
    lastName: decodedToken.last_name,
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken.club_id,
    teamId: decodedToken.team_id,
  }
);

const infoUserDown = () => (
  {
    type: INFO_USER_DOWN,
  }
);

const updateClubId = ({ clubId }) => (
  {
    type: UPDATE_CLUB_ID,
    clubId,
  }
);

export { infoUserUp, infoUserDown, updateClubId };
