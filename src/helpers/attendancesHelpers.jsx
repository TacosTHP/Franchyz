import Cookies from 'js-cookie';

const prepareAttendancesFromPlayer = ({ player, backgroundColor = '#0000FF' }) => {
  const preparedPlayerAttendances = [];
  player.attendances.games.forEach((game) => {
    preparedPlayerAttendances.push({
      type: 'game',
      title: `GAME - ${game.title}`,
      start: game.starting_date_time,
      end: game.starting_date_time + game.duration,
      backgroundColor,
      textColor: '#FFFFFF',
    });
  });

  player.attendances.practices.forEach((practice) => {
    preparedPlayerAttendances.push({
      type: 'practice',
      title: `GAME - ${practice.title}`,
      start: practice.starting_date_time,
      end: practice.starting_date_time + practice.duration,
      backgroundColor,
      textColor: '#FFFFFF',
    });
  });

  return preparedPlayerAttendances;
};

const prepareAttendancesFromTeam = ({ team }) => {
  let preparedTeamAttendances = [];
  const teamColor = JSON.parse(Cookies.get('teamsColors'))[team.title];
  team.players.forEach((player) => {
    const preparedPlayerAttendances = prepareAttendancesFromPlayer(
      { player, backgroundColor: teamColor },
    );
    preparedTeamAttendances = preparedTeamAttendances.concat(preparedPlayerAttendances);
  });

  preparedTeamAttendances = Array.from(new Set(preparedTeamAttendances));
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
