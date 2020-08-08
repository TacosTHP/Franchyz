import Cookies from 'js-cookie';

const getPractice = ({ practiceId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/practices/${practiceId}.json`;
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

const createPractice = ({
  title, description, address, city, country, zipCode, datetime, duration,
}) => {
  const data = {
    practice: {
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
  const endUrl = '/practices';
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

export { getPractice, createPractice };
