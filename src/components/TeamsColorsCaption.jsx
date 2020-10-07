import React from 'react';
import Cookies from 'js-cookie';

const TeamsColorsCaption = () => {
  const practiceStyling = (color) => (
    {
      color,
      borderColor: color,
    }
  );

  const gameStyling = (color) => (
    {
      backgroundColor: color,
      borderColor: color,
    }
  );

  const obj = JSON.parse(Cookies.get('teamsColors'));
  if (obj !== undefined) {
    return Object.keys(obj).map((team) => (
      <div key={team} className="d-flex flex-column justify-content-center align-items-center my-3">
        <div className="text-white font-weight-bold mb-3">
          {team}
        </div>
        <div className="d-flex justify-content-around w-75">
          <div className="d-flex justify-content-center rounded p-3 text-white font-weight-bold w-25" style={gameStyling(obj[team])}>
            GAME
          </div>
          <div className="d-flex justify-content-center rounded p-3 bg-white font-weight-bold w-25" style={practiceStyling(obj[team])}>
            PRACTICE
          </div>
        </div>
      </div>
    ));
  }
};

export default TeamsColorsCaption;
