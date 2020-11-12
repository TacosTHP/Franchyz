import Cookies from 'js-cookie';
import colors from 'styles/_scss-variables.scss';

const prepareAttendancesFromPlayer = ({ player, teamColor }) => {
  const preparedPlayerAttendances = [];
  player.attendances.games.forEach((game) => {
    preparedPlayerAttendances.push({
      type: 'game',
      title: `GAME - ${game.title}`,
      start: game.starting_date_time,
      end: game.starting_date_time + game.duration,
      backgroundColor: teamColor,
      textColor: colors.whiteColor,
    });
  });

  player.attendances.practices.forEach((practice) => {
    preparedPlayerAttendances.push({
      type: 'practice',
      title: `PRACTICE - ${practice.title}`,
      start: practice.starting_date_time,
      end: practice.starting_date_time + practice.duration,
      backgroundColor: colors.whiteColor,
      textColor: teamColor,
    });
  });

  return preparedPlayerAttendances;
};

const prepareAttendancesFromTeam = ({ team }) => {
  let preparedTeamAttendances = [];
  const teamColor = JSON.parse(Cookies.get('teamsColors'))[team.title];
  team.players.forEach((player) => {
    const preparedPlayerAttendances = prepareAttendancesFromPlayer(
      { player, teamColor },
    );
    preparedTeamAttendances = preparedTeamAttendances.concat(preparedPlayerAttendances);
  });

  preparedTeamAttendances = preparedTeamAttendances.map((attendance) => JSON.stringify(attendance));
  preparedTeamAttendances = Array.from(new Set(preparedTeamAttendances));
  preparedTeamAttendances = preparedTeamAttendances.map((attendance) => JSON.parse(attendance));

  return preparedTeamAttendances;
};

const prepareAttendancesFromClub = ({ club }) => {
  let preparedClubAttendances = [];
  club.teams.forEach((team) => {
    const preparedTeamAttendances = prepareAttendancesFromTeam({ team });
    preparedClubAttendances = preparedClubAttendances.concat(preparedTeamAttendances);
  });
  return preparedClubAttendances;
};

const prepareAttendancesForFullCalendar = ({ attendancesOwners }) => {
  const ownersKeys = Object.keys(attendancesOwners);

  if (ownersKeys.includes('league')) {
    return prepareAttendancesFromClub({ club: attendancesOwners });
  }

  if (ownersKeys.includes('players')) {
    return prepareAttendancesFromTeam({ team: attendancesOwners });
  }

  return prepareAttendancesFromPlayer({ player: attendancesOwners });
};

export default prepareAttendancesForFullCalendar;
