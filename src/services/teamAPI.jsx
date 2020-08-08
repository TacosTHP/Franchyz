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

const getTeam = (clubId, teamId) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams/${teamId}.json`;
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

const createTeam = ({
  team, creatorId, coachId, clubId,
}) => {
  const data = {
    title: team,
    creator_id: creatorId,
    club_id: clubId,
    coach_id: coachId,
  };

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams.json`;
  const url = baseURL + endUrl;

  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
};
export { createTeam, getTeam, getTeams };
