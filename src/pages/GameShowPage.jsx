import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import localization from 'moment/locale/fr';
import * as eventsAPI from 'services/gameAPI';
import 'styles/app.scss';

const GameShow = () => {
  const { gamesId } = useParams();
  const [game, setGame] = useState();
  moment.updateLocale('fr', localization);

  const setupPage = () => {
    let content;
    if (game !== undefined) {
      content = (
        <>
          <div className="card auto-mx">
            <div className="card-header">
              <div className="text-uppercase">
                {game.title}
              </div>
            </div>
            <div className="card-body">
              <h6>Location</h6>
              <p>
                {game.address}
              </p>
              <p>
                {game.city}
              </p>
              <p>
                {game.zip_code}
                {game.country}
              </p>
              <h6> Date and Time </h6>
              <p>
                {moment(game.starting_date_time).format('LLLL')}
              </p>
              <h6> Duration in min: </h6>
              <p>
                {game.duration}
              </p>
              {
                game.canceled !== false
                  ? ''
                  : <h6 className="redtext">The event is canceled.</h6>
              }
            </div>
          </div>
        </>
      );
    } else {
      content = (
        <>
          <h5 className="text-center mt-5 redtext">This event does not exist.</h5>
        </>
      );
    }
    return content;
  };

  useEffect(() => {
    const loadData = async () => {
      const gameData = await eventsAPI.getGame(gamesId);
      setGame(gameData.game);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        { setupPage() }
      </div>
    </>
  );
};

export default GameShow;
