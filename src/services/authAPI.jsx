import Cookies from 'js-cookie';
import {pluralyzeType} from 'helpers/misc.jsx'

function signUp(email, password, type, team) {
  let data;
  if (type === 'player') {
    data = {[type]: {
      email: email,
      password: password,
      team_id: team,
    }};
  } else {
    data = {[type]: {
      email: email,
      password: password,
    }};
  };

  let types = pluralyzeType(type);
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/${types}.json`;
  let url = baseURL + endUrl;

  console.log(url)
  let ans = {
    headers: '',
    body: ''
  };

  let request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };



  return fetch(url, request)
    .then(response => {
      console.log(response)
      ans.headers = response.headers
      return response.json()
    })
    .then(response => {
      ans.body = response
      return ans
    });
};

function signIn(email, password, type) {
  const data = {[type]: {
    email: email,
    password: password,
  }};

  let types = pluralyzeType(type);
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/${types}/sign_in.json`;
  let url = baseURL + endUrl;

  let ans = {
    headers: '',
    body: ''
  };

  let request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetch(url, request)
    .then(response => {
      ans.headers = response.headers
      return response.json()
    })
    .then(response => {
      ans.body = response
      return ans
    });
};

function sign_out(type) {
  let types = pluralyzeType(type);
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/${types}/sign_out.json`;
  let url = baseURL + endUrl;

  let request = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  return fetch(url, request)
    .then(response => {return response});
};

function profile(id, type) {

  type = pluralyzeType(type)

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}/${id}.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {return response})
}

export {signIn, signUp, sign_out, profile}
