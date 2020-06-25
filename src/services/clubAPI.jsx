import Cookies from 'js-cookie'

const getClubs = () => {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = '/clubs.json'
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
};

function getClub(clubId) {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}.json`
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


function createClub({ creationDate, clubName, clubDescription, zipCode, city, country, address, league, pool, conference, creatorId}) {
  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs.json`;
  let url = baseUrl + endUrl;

  let headers = {
    "Content-Type": "application/json",
    Authorization: Cookies.get('token')
  }

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

  let request = { method: "post", headers: headers, body: JSON.stringify(data), }

  console.log(data, request)
  return fetch(url, request)
    .then((response) => { return response })

}

export { getClub, getClubs, createClub }
