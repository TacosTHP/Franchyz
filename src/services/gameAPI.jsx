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
  clubId, teamId, title, description, address, city, country, zipCode, dateTime, duration,
}) => {
  const data = {
    title,
    long_description: description,
    address,
    city,
    country,
    zipCode,
    starting_date_time: dateTime,
    duration,
    canceled: false,
  };

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams/${teamId}/games.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request)
    .then((response) => response.json());
};

export { createGame, getGame };
