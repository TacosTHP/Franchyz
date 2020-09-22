import Cookies from 'js-cookie';
import { pluralyzeType } from 'helpers/misc';

const signUp = ({
  email, password, type, teamId,
}) => {
  let data;
  if (type === 'player') {
    data = {
      [type]: {
        email,
        password,
        team_id: teamId,
      },
    };
  } else {
    data = {
      [type]: {
        email,
        password,
      },
    };
  }

  const types = pluralyzeType(type);
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/${types}.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const signIn = ({ email, password, type }) => {
  const data = {
    [type]: {
      email,
      password,
    },
  };

  const types = pluralyzeType(type);
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/${types}/sign_in.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const signOut = ({ userType }) => {
  const types = pluralyzeType(userType);
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/${types}/sign_out.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(url, request);
};

const profile = ({ id, type }) => {
  const userType = pluralyzeType(type);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const request = {
    method: 'get',
    headers,
  };

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/${userType}/${id}.json`;
  const url = baseURL + endUrl;

  return fetch(url, request)
    .then((response) => response.json());
};

export {
  signIn, signUp, signOut, profile,
};
