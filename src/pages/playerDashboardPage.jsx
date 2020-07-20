import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Calendar from 'components/calendar';
import DashboardPlayerTabs from 'components/dashboardPlayerTabs';

import * as clubAPI from 'services/clubAPI';
import * as userAPI from 'services/userAPI';

import '../styles/form.scss';

const PlayerDashboardPage = () => {
  const myClubId = useSelector((state) => state.userReducer.clubId);
  const teamId = useSelector((state) => state.userReducer.teamId);
  const playerId = useSelector((state) => state.userReducer.id);
  const [club, setClub] = useState([]);
  const [player, setPlayer] = useState('');

  const loadClub = async () => {
    const response = await clubAPI.getClub(myClubId);
    setClub(response);
  };

  const loadPlayer = async () => {
    const response = await userAPI.getPlayer(myClubId, teamId, playerId);
    setPlayer(response);
  };

  const setupElements = () => {
    let content;
    if (player !== '') {
      content = (
        <>
          <DashboardPlayerTabs club={club} />
          <div className="container mb-5">
            <Calendar attendances={player.attendances} />
          </div>
        </>
      );
    } else {
      content = (
        <p> loading... </p>
      );
    }
    return content;
  };

  const setupPageOrInvitation = () => {
    let content;
    if (myClubId === undefined) {
      content = (
        <>
          <h6 className="text-center redtext">
            You have to ask your trainer to add you to a club/team.
          </h6>
        </>
      );
    } else {
      content = (
        <>
          <div>
            <div className="text-center mt-5">
              <h1>Welcome to FRANCHYZ</h1>
              <h4>Your trainer invited you to FRANCHYZ.</h4>
              <h4>You can find your team events in the calendar.</h4>
              <h5 className="text-primary">Let your trainer know, whether you participate in the events you are invited for </h5>
              <h5 className="text-primary">by validating your participation.</h5>
            </div>
          </div>
          { setupElements() }
        </>
      );
    }
    return content;
  };

  useEffect(() => {
    loadClub();
  }, []);

  useEffect(() => {
    loadPlayer();
  }, []);

  return (
    <div className="container mb-3 mt-3">
      {setupPageOrInvitation()}
    </div>
  );
};

export default PlayerDashboardPage;
