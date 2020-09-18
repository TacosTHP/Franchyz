import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const setUserInfo = (decodedToken) => {
  let userInfo = {
    id: decodedToken.sub,
    email: decodedToken.email,
    firstName: decodedToken.firstName,
    lastName: decodedToken.lastName,
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken.club_id,
    teamId: decodedToken.team_id,
  };
  userInfo = JSON.stringify(userInfo);
  Cookies.set('userInfo', userInfo, { sameSite: 'lax' });
};

const updateUserInfo = (hash) => {
  let userInfo = JSON.parse(Cookies.get('userInfo'));
  Object.entries(hash).forEach(([key, value]) => {
    userInfo = {
      ...userInfo,
      [key]: value,
    };
  });
  userInfo = JSON.stringify(userInfo);
  Cookies.set('userInfo', userInfo, { sameSite: 'lax' });
};

const authRefresher = () => {
  let ans;
  if (Cookies.get('token') === undefined || Cookies.get('token') === null) {
    ans = {
      loading: false,
      isAuth: false,
      userType: '',
      successMessage: null,
      errorMessage: null,
      url: null,
    };
  } else {
    const decodedToken = jwtDecode(Cookies.get('token'));
    ans = {
      loading: false,
      isAuth: true,
      userType: decodedToken.scp,
      successMessage: null,
      errorMessage: null,
      url: null,
    };
  }
  return ans;
};

const userInfoRefresher = () => {
  let ans;
  if (Cookies.get('userInfo') === undefined) {
    ans = {
      id: null,
      email: '',
      firstName: '',
      lastName: '',
      isAdmin: null,
      clubId: null,
      teamId: null,
    };
  } else {
    ans = JSON.parse(Cookies.get('userInfo'));
  }
  return ans;
};

export {
  setUserInfo, updateUserInfo, authRefresher, userInfoRefresher,
};
