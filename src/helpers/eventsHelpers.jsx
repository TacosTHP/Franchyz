import variables from '../styles/_scss-variables.scss';

const buildFullCalendarEvents = (array) => {
  const events = [];
  if (array !== undefined) {
    if (array.games !== []) {
      array.games.forEach((game, i) => {
        events.push(
          {
            id: i,
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
    if (array.practices !== []) {
      array.practices.forEach((practice, i) => {
        events.push(
          {
            id: i,
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
  return events;
};

export default buildFullCalendarEvents;
