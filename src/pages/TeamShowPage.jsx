import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as teamAPI from 'services/teamAPI';

import Loading from 'components/Loading';
import CoachCard from 'components/CoachCard';
import PlayersTable from 'components/PlayersTable';

const TeamShowPage = () => {
  const { clubId, teamId } = useParams();
  const [team, setTeam] = useState();
  const loading = useSelector((state) => state.authReducer.loading);

  useEffect(() => {
    const loadData = async () => {
      const teamData = await teamAPI.getTeam(clubId, teamId);
      setTeam(teamData);
    };
    loadData();
  }, []);

  if (loading) {
    return (<Loading />);
  }

  if (team !== undefined) {
    return (
      <div className="layoutPage">
        <div className="mr-auto text-primary">FLECHE RETOUR</div>
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="text-primary text-center">
            {team.title}
          </h1>
        </div>
        <CoachCard coach={team.coach} />
        <PlayersTable players={team.players} />
      </div>
    );
  }
  return (<Loading />);
};

export default TeamShowPage;
