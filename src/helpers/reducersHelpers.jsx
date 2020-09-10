import * as clubAPI from 'services/clubAPI';
import * as userAPI from 'services/userAPI';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

const setUserInfo = (decodedToken) => {
  let userInfo = {
    id: decodedToken['sub'],
    email: decodedToken['email'],
    firstName: decodedToken['first_name'],
    lastName: decodedToken['last_name'],
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken['club_id'],
    teamId: decodedToken['team_id'],
  }
  userInfo = JSON.stringify(userInfo)
  Cookies.set('userInfo', userInfo, {sameSite: 'lax'})
}

const updateUserInfo = (hash) => {
  console.log(hash)
  let userInfo = JSON.parse(Cookies.get('userInfo'))
  for(let key in hash) {
      console.log(hash[key])
    userInfo = {
      ...userInfo,
      [key]: hash[key],
    }
  }
  console.log(userInfo)
  userInfo = JSON.stringify(userInfo)
  Cookies.set('userInfo', userInfo, {sameSite: 'lax'})
}

const authRefresher = () => {
  if (Cookies.get('token') === undefined || Cookies.get('token') === null){
    return {
      loading: false,
      isAuth: false,
      userType: '',
      error: null, 
    }
  }
  else{
    let decodedToken = jwt_decode(Cookies.get('token'))
    return {
      loading: false,
      isAuth: true,
      userType: decodedToken['scp'],
      error: null,
    } 
  }
}

const userInfoRefresher = () => {
  if (Cookies.get('userInfo') === undefined) {
    return {
      id: null,
      email: '',
      firstName: '',
      lastName: '',
      isAdmin: null,
      clubId: null,
      teamId: null,
    }
  }
  else {
    return JSON.parse(Cookies.get('userInfo'))
  }
}

export { setUserInfo, updateUserInfo, authRefresher, userInfoRefresher }
