import Cookies from 'js-cookie';
import variables from 'styles/_scss-variables.scss';

const buildFullCalendarEvents = (userType, array, index) => {
  const fullCalendarEvents = [];

  const buildTeamsColors = (teams) => {
    if (Cookies.get('teamsColors') === undefined) {
      const colorKeys = Object.keys(variables);
      const obj = {};
      teams.forEach((team, i) => {
        obj[team.title] = variables[colorKeys[i]];
      });
      Cookies.set('teamsColors', obj);
    }
  };

  const buildTeamEvents = (team) => {
    const teamColor = JSON.parse(Cookies.get('teamsColors'))[team.title];
    if (team.attendances !== undefined) {
      if (team.attendances.games !== undefined) {
        team.attendances.games.forEach((game, i) => {
          fullCalendarEvents.push(
            {
              id: i,
              type: 'game',
              game_id: game.id,
              title: `GAME - ${game.title}`,
              start: game.starting_date_time,
              end: game.starting_date_time + game.duration,
              backgroundColor: teamColor,
              borderColor: teamColor,
              textColor: variables.whiteColor,
            },
          );
        });
      }
      if (team.attendances.practices !== undefined) {
        team.attendances.practices.forEach((practice, i) => {
          fullCalendarEvents.push(
            {
              id: i,
              type: 'practice',
              practice_id: practice.id,
              title: `PRACTICE - ${practice.title}`,
              start: practice.starting_date_time,
              end: practice.starting_date_time + practice.duration,
              backgroundColor: variables.whiteColor,
              borderColor: teamColor,
              textColor: teamColor,
            },
          );
        });
      }
    }
    return fullCalendarEvents;
  };

  const buildClubEvents = (teams) => {
    if (teams !== undefined && teams.length > 1) {
      buildTeamsColors(teams);
      teams.forEach((team) => {
        buildTeamEvents(team);
      });
    }
  };

  const buildPlayerEvents = (events) => {
    if (events !== undefined) {
      if (events.games !== undefined) {
        events.games.forEach((game, i) => {
          fullCalendarEvents.push(
            {
              id: i + 1,
              type: 'game',
              game_id: game.id,
              title: game.title,
              start: game.starting_date_time,
              end: game.starting_date_time + game.duration,
              backgroundColor: variables.primaryColor,
              borderColor: variables.white,
              textColor: variables.white,
            },
          );
        });
      }
      if (events.practices !== undefined) {
        events.practices.forEach((practice, i) => {
          fullCalendarEvents.push(
            {
              id: i + 1,
              type: 'practice',
              practice_id: practice.id,
              title: practice.title,
              start: practice.starting_date_time,
              end: practice.starting_date_time + practice.duration,
              backgroundColor: variables.secondaryColor,
              borderColor: variables.white,
              textColor: variables.white,
            },
          );
        });
      }
    }
    return fullCalendarEvents;
  };

  if (userType === 'coach') {
    if (typeof index === 'number' && index > 0) {
      const selectedTeam = array.find((team) => team.id === index);
      buildTeamEvents(selectedTeam);
    } else {
      buildClubEvents(array);
    }
  } else {
    buildPlayerEvents(array);
  }
  return fullCalendarEvents;
};

export default buildFullCalendarEvents;
