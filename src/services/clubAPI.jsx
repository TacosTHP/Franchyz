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

const editClub = ({ clubId, fields }) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}.json`;
  const url = baseUrl + endUrl;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
  };

  const data = {
    name: fields.data.name,
    date_of_creation: fields.data.date_of_creation,
    description: fields.data.description,
    league: fields.data.league,
    pool: fields.data.pool,
    conference: fields.data.conference,
    address: fields.data.address,
    zip_code: fields.data.zip_code,
    city: fields.data.city,
    country: fields.data.country,
  };

  const request = {
    method: 'put',
    headers,
    body: JSON.stringify(data),
  };

  return fetch(url, request)
    .then((response) => response.json());
};

export {
  getClubs, getClub, createClub, editClub,
};
