import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useInputChange from 'customHooks/useInputChange';

import * as userAPI from 'services/userAPI';

import { message } from 'antd';

const PlayerEditForm = ({ player, team }) => {
  const [input, handleInputChange] = useInputChange(player);
  const clubId = team.club_id;
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    await userAPI.playerUpdate(input, clubId);
    await message.success('You successfully edited your profile', 2.5);
    history.push('/dashboardPlayer');
  };

  const setupElements = () => {
    let content;
    if (player !== undefined) {
      content = (
        <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit}>
          <div className="form-group">
            <label>
              First Name :
              <input
                className="form-control"
                type="text"
                name="first_name"
                placeholder={player.first_name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name :
              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder={player.last_name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone :
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder={player.phone}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Birthdate :
              <input
                className="form-control"
                type="date"
                name="birthdate"
                placeholder={player.birthdate}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Arrival :
              <input
                className="form-control"
                type="date"
                name="arrival"
                placeholder={player.arrival}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <div className="form-group">
              <label>
                Availability :
                <select className="form-control" name="availability" onChange={handleInputChange}>
                  <option value="false">Not available</option>
                  <option value="true">Available</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Height (cm) :
                <input
                  className="form-control"
                  type="number"
                  name="height"
                  min="0"
                  placeholder={player.height}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Weight (kg) :
                <input
                  className="form-control"
                  type="number"
                  name="weight"
                  min="0"
                  placeholder={player.weight}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Jersey Number :
                <input
                  className="form-control"
                  type="number"
                  name="jersey_number"
                  min="0"
                  placeholder={player.jersey_number}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Current position :
                <p>
                  {player.position}
                </p>
                <select className="form-control" name="position" onChange={handleInputChange}>
                  <option value="" selected disabled hidden>Choose an option</option>
                  <option value="" disabled>OFFENSE</option>
                  <option value="QB">QUATERBACK</option>
                  <option value="HB">HALFBACK</option>
                  <option value="FB">FULLBACK</option>
                  <option value="LT">LEFT TACKLE</option>
                  <option value="LG">LEFT GUARD</option>
                  <option value="C">CENTER</option>
                  <option value="RG">RIGHT GUARD</option>
                  <option value="RT">RIGHT TACKLE</option>
                  <option value="TE">TIGHT-END</option>
                  <option value="WR">WIDE RECEIVER</option>
                  <option value="" disabled>DEFENSE</option>
                  <option value="FS">FREE SAFETY</option>
                  <option value="SS">STRONG SAFETY</option>
                  <option value="CB">CORNERBACK</option>
                  <option value="DT">DEFENSIVE TACKLE</option>
                  <option value="LE">LEFT DEFENSIVE-END</option>
                  <option value="RE">RIGHT DEFENSIVE-END</option>
                  <option value="LOLB">LEFT OUTSIDE LINEBACKER</option>
                  <option value="MLB">MIDDLE LINEBACKER</option>
                </select>
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    } else {
      content = (
        <>
        </>
      );
    }
    return content;
  };

  return (
    <div className="container">
      { setupElements() }
    </div>
  );
};

export default PlayerEditForm;

PlayerEditForm.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone: PropTypes.string,
    birthdate: PropTypes.string,
    arrival: PropTypes.string,
    availability: PropTypes.bool,
    height: PropTypes.number,
    weight: PropTypes.number,
    jersey_number: PropTypes.number,
    position: PropTypes.string,
    'admin?': PropTypes.bool,
    club_id: PropTypes.number,
  }).isRequired,
  team: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    club_id: PropTypes.number,
    coach_id: PropTypes.number,
    creator_id: PropTypes.number,
  }).isRequired,
};
