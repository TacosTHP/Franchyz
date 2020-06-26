import moment from "moment";

function getGame(game_id) {
        let baseURL = process.env.REACT_APP_API_URL;
        let endUrl = `/practices/${game_id}.json`
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


function createGame(clubId, teamId, eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration) {
  
  let dateTime2 = dateTime.slice(0, -5)
  let dateTime3 =  new Date(dateTime2)
  let dateTime4 = moment.utc(dateTime3)

  
  const data = {
    title: eventTitle,
    long_description: eventDescription,
    address: address,
    city: city,
    country: country,
    zip_code: zipCode,
    starting_date_time: dateTime4,
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
      console.log("starting date time " +  response.starting_date_time)
      return response 
      
    })

}

export { createGame, getGame }
