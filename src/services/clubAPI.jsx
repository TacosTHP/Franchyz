import Cookies from 'js-cookie';

const getClubs = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/clubs.json';
  const url = baseURL + endUrl;

  const headers = {
    'Content-Type': 'application/json',
  };

  const request = {
    headers,
  };

  return fetch(url, request)
    .then((response) => response.json());
};

const getClub = ({ clubId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}.json`;
  const url = baseURL + endUrl;

  const headers = {
    'Content-Type': 'application/json',
  };

  const request = {
    headers,
  };

  return fetch(url, request);
};

const createClub = ({
  creationDate, clubName, clubDescription,
  zipCode, city, country, address,
  league, pool, conference, creatorId,
}) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const endUrl = '/clubs.json';
  const url = baseUrl + endUrl;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const data = {
    date_of_creation: creationDate,
    name: clubName,
    description: clubDescription,
    zip_code: zipCode,
    city,
    country,
    address,
    league,
    pool,
    conference,
    creator_id: creatorId,
  };

  const request = {
    method: 'post',
    headers,
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const editClub = ({ clubId, input }) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}.json`;
  const url = baseUrl + endUrl;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const data = {
    name: input.name,
    date_of_creation: input.date_of_creation,
    description: input.description,
    league: input.league,
    pool: input.pool,
    conference: input.conference,
    address: input.address,
    zip_code: input.zip_code,
    city: input.city,
    country: input.country,
  };

  const request = {
    method: 'put',
    headers,
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

export {
  getClubs, getClub, createClub, editClub,
};
