import React from 'react';
import PropTypes from 'prop-types';
import useInputChange from 'customHooks/useInputChange';

const ClubEdit = ({ club }) => {
  const [input, handleInputChange] = useInputChange({
    name: club.name,
    date_of_creation: club.date_of_creation,
    description: club.description,
    league: club.league,
    pool: club.pool,
    conference: club.conference,
    address: club.address,
    city: club.city,
    country: club.country,
    zip_code: club.zip_code,
  });

  const submit = (event) => {
  };

  return (
    <form onSubmit={submit}>
      <div className="container row">
        <div className="col">
          <h6 className="font-weight-bold">Club details:</h6>
          <div>
            <label htmlFor="name">
              Club name:
              <input id="name" name="name" type="text" placeholder={input.name} value={input.name} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="date">
              Founded in:
              <input id="date" name="date_of_creation" type="date" placeholder={input.date_of_creation} value={input.date_of_creation} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Club description:
              <textarea id="description" name="description" rows="1" placeholder={input.description} value={input.description} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="league">
              League:
              <input id="league" name="league" type="text" placeholder={input.league} value={input.league} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="pool">
              Pool:
              <input id="pool" name="pool" type="text" placeholder={input.pool} value={input.pool} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="conference">
              Conference:
              <input id="conference" name="conference" type="text" placeholder={input.conference} value={input.conference} onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <div className="col">
          <h6 className="font-weight-bold">Club address:</h6>
          <div>
            <label htmlFor="address">
              Address:
              <input id="address" name="address" type="text" placeholder={input.address} value={input.address} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="zipCode">
              Zip code:
              <input id="zipCode" name="zip_code" type="text" placeholder={input.zip_code} value={input.zip_code} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input id="city" name="city" type="text" placeholder={input.city} value={input.city} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              Country:
              <input id="country" name="country" type="text" placeholder={input.country} value={input.country} onChange={handleInputChange} />
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default ClubEdit;

ClubEdit.propTypes = {
  club: PropTypes.shape({
    id: PropTypes.number,
    logo_url: PropTypes.string,
    name: PropTypes.string,
    date_of_creation: PropTypes.string,
    description: PropTypes.string,
    league: PropTypes.string,
    pool: PropTypes.string,
    conference: PropTypes.string,
    address: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
