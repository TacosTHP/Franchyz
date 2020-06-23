import Cookies from 'js-cookie'

function createPractice( EventTitleP, EventDescriptionP, AddressP, CityP, CountryP, ZipCodeP, DateTimeP, DurationP, Club_id, Team_id) {

	const data = {
		title: EventTitleP,
		long_description: EventDescriptionP,
		address: AddressP,
		city: CityP,
		country: CountryP,
		zip_code: ZipCodeP,
		starting_date_time: DateTimeP,
		duration: DurationP,
		canceled: false,
	};

	let club_id = Club_id;
	let team_id = Team_id;
	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/clubs/${club_id}/teams/${team_id}/practices.json`;
	let url = baseURL + endUrl;

	return fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((response) => {
		return response;
	});
}

const getUnconfirmedEvents = (player_id, club_id, team_id) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/unconfirmed_events.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getAttendedGames = (player_id, club_id, team_id) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/my_attended_games.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getUnattendedGames = (player_id, club_id, team_id) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/my_unattended_games.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getAttendedPractices = (player_id, club_id, team_id) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/my_attended_practices.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const getUnattendedPractices = (player_id, club_id, team_id) => {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/my_unattended_practices.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

const confirmAttendance = (player_id, club_id, team_id, event_id) => {
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
  let endUrl = `/clubs/${club_id}/teams/${team_id}/players/${player_id}/events/${event_id}.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
}

export { createPractice, getUnconfirmedEvents, getAttendedGames, getUnattendedGames, getAttendedPractices, getUnattendedPractices, confirmAttendance };

