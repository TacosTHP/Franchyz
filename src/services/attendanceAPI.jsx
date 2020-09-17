const createAttendance = ({ eventId, playerId, eventType }) => {
  let data;
  switch (eventType) {
    case 'game':
      data = {
        attendance: {
          game_id: eventId,
          player_id: playerId,
        },
      };
      break;
    case 'practice':
      data = {
        attendance: {
          practice_id: eventId,
          player_id: playerId,
        },
      };
      break;
    default:
  }

  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/attendances';
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

export { createAttendance };
