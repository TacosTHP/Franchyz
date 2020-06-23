import * as clubAPI from 'services/clubAPI'
import * as gameAPI from 'services/gameAPI'

const resourcesCalls = {
  createClub: clubAPI.createClub,
  createGame: gameAPI.createGame,
}

export { resourcesCalls }
