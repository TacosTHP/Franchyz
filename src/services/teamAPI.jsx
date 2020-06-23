function getAllTeams(id) {
  const data = {
    id: id,
  };
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}/teams.json`
  let url = baseURL + endUrl

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => { return response });
}

function getTeamsOfClub(id) {
  
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}/teams.json`
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

function createTeam(TeamName, Creator_id, Coach_id, Club_id) {
  const data = {
    title: TeamName,
    creator_id: Creator_id,
    club_id: Club_id,
    coach_id: Coach_id,
  };

  console.log(data);

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${Club_id}/teams.json`;
  let url = baseURL + endUrl;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => { return response });
}


const getTeam = (clubId, teamId) => {

  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}.json`;
  let url = baseUrl + endUrl;

  let request = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(url, request)
    .then(response => response.json())
    .then(response => { return response })
};

export { createTeam, getAllTeams, getTeamsOfClub, getTeam };
