function getAllTeams(id) {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}/teams.json`;
  let url = baseURL + endUrl;

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

const getTeams = ({ clubId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams.json`;
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

function getTeamsOfClub(id) {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}/teams.json`;
  let url = baseURL + endUrl;

  let headers = {
    "Content-Type": "application/json",
  };

  let request = {
    headers: headers,
  };

  return fetch(url, request)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

function createTeam(team, creatorId, coachId, clubId) {
  const data = {
    title: team,
    creator_id: creatorId,
    club_id: clubId,
    coach_id: coachId,
  };

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams.json`;
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

const getTeam = (clubId, teamId) => {
  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}.json`;
  let url = baseUrl + endUrl;

  let request = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(url);

  return fetch(url, request)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export { createTeam, getAllTeams, getTeamsOfClub, getTeam, getTeams };
