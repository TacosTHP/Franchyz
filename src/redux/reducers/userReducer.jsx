import { INFO_USER_UP, INFO_USER_DOWN, UPDATE_CLUB_ID } from '../types/userTypes'
import { userInfoRefresher } from 'helpers/reducersHelpers'


const initialState = userInfoRefresher()

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case INFO_USER_UP:
      return {
        ...state,
        id: action.id,
        email: action.email,
        firstName: action.first_name,
        lastName: action.last_name,
        isAdmin: action.isAdmin,
        teamId: action.teamId,
        clubId: action.clubId,
      }
    case INFO_USER_DOWN:
      return {
        ...state,
        id: null,
        email: '',
        firstName: '',
        lastName: '',
        isAdmin: null,
        teamId: null,
        clubId: null,
      }
    case UPDATE_CLUB_ID:
      return {
        ...state,
        clubId: action.clubId
      }

    default:
      return {
        ...state
      }
  }
}

export default userReducer
