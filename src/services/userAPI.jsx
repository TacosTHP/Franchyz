import Cookies from 'js-cookie';

const getPlayer = (clubId, teamId, playerId) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}.json`;
  const url = baseURL + endUrl;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const request = {
    method: 'get',
    headers,
  };

  return fetch(url, request)
    .then((response) => response.json());
};

const playerUpdate = ({clubId, teamId, playerId, data}) => {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}`;
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  let request = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data)
  };

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {return response})
};

export { getPlayer, playerUpdate };
