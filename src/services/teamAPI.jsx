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
  clubId, coachId, teamName,
}) => {
  const data = {
    title: teamName,
    creator_id: coachId,
    club_id: clubId,
    coach_id: coachId,
  };

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/clubs/${clubId}/teams.json`;
  const url = baseURL + endUrl;

  return fetch(url, request);
};
export { createTeam, getTeam, getTeams };
