import * as clubAPI from 'services/clubAPI';
import * as userAPI from 'services/userAPI';

const resourcesCalls = {
  createClub: clubAPI.createClub,
  profileUpdate: userAPI.profileUpdate
}

export { resourcesCalls }
