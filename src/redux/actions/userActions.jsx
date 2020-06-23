import {INFO_USER_UP, INFO_USER_DOWN} from '../types/userTypes.jsx'

function infoUserUp(decoded_token){
  return {
    type: INFO_USER_UP,
    id: decoded_token['sub'],
    email: decoded_token['email'],
    first_name: decoded_token['first_name'],
    last_name: decoded_token['last_name'],
    isAdmin: decoded_token['admin?'],
    club_id: decoded_token['club_id'],
    team_id: decoded_token['team_id'],
  }
}

function infoUserDown(decoded_token){
  return {
    type: INFO_USER_DOWN,
  }
}

export {infoUserUp, infoUserDown}
