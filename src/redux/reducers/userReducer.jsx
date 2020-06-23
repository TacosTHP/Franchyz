import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { INFO_USER_UP, INFO_USER_DOWN } from '../types/userTypes'

let tempo
let decoded_token 
if (Cookies.get('token') === undefined){
  tempo = {
  }
}
else{
  decoded_token =jwt_decode(Cookies.get('token'))
  tempo = {
    id: decoded_token['sub'],
    email: decoded_token['email'],
    first_name: decoded_token['first_name'],
    last_name: decoded_token['last_name'],
    isAdmin: decoded_token['admin?'],
    club_id: decoded_token['club_id'],
    team_id: decoded_token['team_id'],
  } 
}

const initialState = tempo

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case INFO_USER_UP:
      return {
        ...state,
        id: action.id,
        email: action.email,
        first_name: action.first_name,
        last_name: action.last_name,
        isAdmin: action.isAdmin,
        team_id: action.team_id,
        club_id: action.club_id,
        gender: action.de
      }
    case INFO_USER_DOWN:
      return {
        ...state,
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        isAdmin: null,
        club_id: null,
      }
    default:
      return {
        ...state
      }
  }
}

export default userReducer
