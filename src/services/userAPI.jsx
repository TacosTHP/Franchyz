import Cookies from 'js-cookie';
import { pluralyzeType } from 'helpers/misc.jsx';

const profile = (id, type) => {
  type = pluralyzeType(type);

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/${type}/${id}.json`;
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  };

  let request = {
    method: 'get',
    headers: headers,
  };

  return fetch(url, request)
  .then(response => response.json())
  .then(response => {return response})
};

const profileUpdate = ({ id, type, fields }) => {
  let data;
  if (type === 'coach') {
    data = {
      first_name: fields.data.first_name,
      last_name: fields.data.last_name,
      phone: fields.data.phone,
      birthdate: fields.data.birthdate,
      arrival: fields.data.arrival,
      'admin?': fields.data['admin?'],
      club_id: fields.data.club_id,
    };
  } else if (type === 'player') {
    data = {
      first_name: fields.data.first_name,
      last_name: fields.data.last_name,
      phone: fields.data.phone,
      birthdate: fields.data.birthdate,
      arrival: fields.data.arrival,
      'availability?': fields.data['availability?'],
      height: fields.data.height,
      weight: fields.data.weight,
      gender: fields.data.gender,
      jersey_number: fields.data.jersey_number,
      position: fields.data.position,
      team_id: fields.data.team_id,
    };
  };

  type = pluralyzeType(type);

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/${type}/${id}.json`;
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token'),
    // 'Access-Control-Allow-Methods': '*'
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

export { profile, profileUpdate };
