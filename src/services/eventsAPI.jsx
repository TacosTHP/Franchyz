import Cookies from 'js-cookie'

const getUnconfirmedEvents = (playerId, clubId, teamId) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/unconfirmed_events.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getAttendedGames = (playerId, clubId, teamId) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/my_attended_games.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getUnattendedGames = (playerId, clubId, teamId) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/my_unattended_games.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getAttendedPractices = (playerId, clubId, teamId) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/my_attended_practices.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getUnattendedPractices = (playerId, clubId, teamId) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/my_unattended_practices.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const confirmAttendance = (playerId, clubId, teamId, eventId) => {
	const data = {
    "confirmed?": "true"
  }

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'put',
    headers: headers,
		body: JSON.stringify(data)
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${clubId}/teams/${teamId}/players/${playerId}/events/${eventId}.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

export {getUnconfirmedEvents, getAttendedGames, getUnattendedGames, getAttendedPractices, getUnattendedPractices, confirmAttendance };

