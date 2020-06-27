import Cookies from 'js-cookie';

const getClubs = () => {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = '/clubs.json';
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json'
  };

  let request = {
    headers: headers
  };

  return fetch(url, request)
  .then(response => response.json())
  .then(response => {return response});
};

const getClub = (id) => {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}.json`;
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json'
  };

  let request = {
    headers: headers
  };

  return fetch(url, request)
  .then(response => response.json())
  .then(response => {return response});
};

const createClub = ({ creationDate, clubName, clubDescription, zipCode, city, country, address, league, pool, conference, creatorId}) => {
  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs.json`;
  let url = baseUrl + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  };

  let data = {
    date_of_creation: creationDate,
    name: clubName,
    description: clubDescription,
    zip_code: zipCode,
    city: city,
    country: country,
    address: address,
    league: league,
    pool: pool,
    conference: conference,
    creator_id: creatorId,
  };

  let request = {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  };

  return fetch(url, request)
  .then((response) => {return response});
};

const editClub = ({id, fields}) => {
  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}.json`;
  let url = baseUrl + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  };

  let data = {
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

  let request = {
    method: 'put',
    headers: headers,
    body: JSON.stringify(data),
  };

  return fetch(url, request)
  .then((response) => {return response});
};

export { getClubs, getClub, createClub, editClub };
