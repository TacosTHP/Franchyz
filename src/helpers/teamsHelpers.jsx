import Cookies from 'js-cookie';
import colors from 'styles/_scss-variables.scss';

const availablePlayersOfTeam = ({ team }) => {
  let count = 0;
  team.players.forEach((player) => {
    if (player['availability?']) {
      count += 1;
    }
  });
  return count;
};

const unavailablePlayersOfTeam = ({ team }) => {
  let count = 0;
  team.players.forEach((player) => {
    if (!player['availability?']) {
      count += 1;
    }
  });
  return count;
};

const extractFollowingEventFromTeam = ({ team }) => {
  let followingEvent = {
    id: 0,
    title: 'No Following Event',
  };
  let type = null;
  if (team !== undefined || team !== null) {
    const today = new Date().toISOString();
    let nextDate = new Date(3000, 12).toISOString();

    team.players.forEach((player) => {
      Object.keys(player.attendances).forEach((eventType) => {
        player.attendances[eventType].forEach((event) => {
          if (today < event.starting_date_time && event.starting_date_time < nextDate) {
            followingEvent = event;
            type = eventType;
            nextDate = event.starting_date_time;
          }
        });
      });
    });
  }
  return { followingEvent, type };
};

const initTeamsColors = ({ teams }) => {
  const teamsColorsBuilder = () => {
    const colorKeys = Object.keys(colors);
    const teamsColors = {};
    teams.forEach((team, i) => {
      teamsColors[team.title] = colors[colorKeys[i]];
    });
    return teamsColors;
  };
  Cookies.set('teamsColors', teamsColorsBuilder());
};

export {
  availablePlayersOfTeam, unavailablePlayersOfTeam, initTeamsColors,
  extractFollowingEventFromTeam,
};
