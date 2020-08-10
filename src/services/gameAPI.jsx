import Cookies from 'js-cookie';

const getGame = (gameId) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/games/${gameId}.json`;
  const url = baseURL + endUrl;

  const headers = {
    'Content-Type': 'application/json',
  };

  const request = {
    method: 'get',
    headers,
  };

  return fetch(url, request)
    .then((response) => response.json());
};

const createGame = ({
  title, description, address, city, country, zipCode, datetime, duration,
}) => {
  const data = {
    game: {
      title,
      long_description: description,
      address,
      city,
      country,
      zip_code: zipCode,
      starting_date_time: datetime,
      duration,
      canceled: false,
    },
  };

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/games';
  const url = baseURL + endUrl;

  const request = {
    method: 'post',
    headers: {
      Authorization: Cookies.get('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request)
    .then((response) => response.json());
};

export { getGame, createGame };
