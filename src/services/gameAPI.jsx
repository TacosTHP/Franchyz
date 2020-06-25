function createGame(clubId, teamId, eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration) {

  const data = {
    title: eventTitle,
    long_description: eventDescription,
    address: address,
    city: city,
    country: country,
    zip_code: zipCode,
    starting_date_time: dateTime,
    duration: duration,
    canceled: false,
  };

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}/games.json`;
  let url = baseURL + endUrl;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then( response => response.json())
    .then((response) => { 
      return response 
    });
}

function getGame(gamesId) {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/games/${gamesId}.json`
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
    .catch(err => console.log("Error: ", err))
  }

export { createGame, getGame }
