import { INFO_USER_UP, INFO_USER_DOWN, UPDATE_CLUB_ID } from '../types/userTypes.jsx'

const infoUserUp = (decodedToken) => {
  return {
    type: INFO_USER_UP,
    id: decodedToken['sub'],
    email: decodedToken['email'],
    firstName: decodedToken['first_name'],
    lastName: decodedToken['last_name'],
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken['club_id'],
    teamId: decodedToken['team_id'],
  }
}

const infoUserDown = () => {
  return {
    type: INFO_USER_DOWN,
  }
}

const updateClubId = (clubId) => {
  return {
    type: UPDATE_CLUB_ID,
    clubId: clubId,
  }
}

export {infoUserUp, infoUserDown, updateClubId}
