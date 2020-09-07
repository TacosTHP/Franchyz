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

const playerUpdate = (input, clubId) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams/${input.team_id}/players/${input.id}`;
  const url = baseURL + endUrl;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const request = {
    method: 'PUT',
    headers,
    body: JSON.stringify(input),
  };

  return fetch(url, request)
    .then((response) => response.json());
};

export { getPlayer, playerUpdate };
