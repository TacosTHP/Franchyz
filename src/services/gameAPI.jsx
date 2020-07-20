import Cookies from 'js-cookie';

function getGame(game_id) {
        let baseURL = process.env.REACT_APP_API_URL;
        let endUrl = `/games/${game_id}.json`
        let url = baseURL + endUrl
  
        let headers = {
          'Content-Type': 'application/json'
        }
  
        let request = {
          headers: headers
        }
        
        return fetch(url, request)
          .then(response => response.json())
          .then(response => { return response })
  
  }

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
