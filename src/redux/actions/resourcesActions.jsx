import { UPDATE_CURRENT_CLUB, UPDATE_CURRENT_TEAMS, ADD_TEAM_TO_CURRENT_TEAMS } from 'redux/types/resourcesTypes';

const updateCurrentClub = ({ club }) => (
  {
    type: UPDATE_CURRENT_CLUB,
    club,
  }

);

const updateCurrentTeams = ({ teams }) => (
  {
    type: UPDATE_CURRENT_TEAMS,
    teams,
  }
);

const addTeamToCurrentTeams = ({ team }) => (
  {
    type: ADD_TEAM_TO_CURRENT_TEAMS,
    team: [team],
  }
);

export { updateCurrentClub, updateCurrentTeams, addTeamToCurrentTeams };
