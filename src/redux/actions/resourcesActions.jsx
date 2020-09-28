import {
  UPDATE_CURRENT_CLUB, UPDATE_CURRENT_TEAMS, ADD_TEAM_TO_CURRENT_TEAMS, UPDATE_CURRENT_TEAM,
  UPDATE_CURRENT_ATTENDANCES,
} from 'redux/types/resourcesTypes';

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

const updateCurrentTeam = ({ team }) => (
  {
    type: UPDATE_CURRENT_TEAM,
    team,
  }
);

const updateCurrentAttendances = ({ attendances }) => (
  {
    type: UPDATE_CURRENT_ATTENDANCES,
    attendances,
  }
);

export {
  updateCurrentClub, updateCurrentTeams, addTeamToCurrentTeams, updateCurrentTeam,
  updateCurrentAttendances,
};
