import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as teamAPI from 'services/teamAPI';

import Loading from 'components/Loading';
import CoachCard from 'components/CoachCard';
import CoachDashboardNavbar from 'components/layouts/CoachDashboardNavbar';
import PlayersTable from 'components/PlayersTable';
import LeftArrowIcon from 'components/Icons/LeftArrowIcon';

const TeamShowPage = () => {
  const { clubId, teamId } = useParams();
  const [team, setTeam] = useState();
  const history = useHistory();
  const loading = useSelector((state) => state.authReducer.loading);

  const goToDashboard = () => {
    history.push('/dashboardAdmin');
  };

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
      <div className="black-background">
        <CoachDashboardNavbar club />
        <div className="p-3">
          <div className="mr-auto text-primary" onClick={goToDashboard}><LeftArrowIcon size="2em" /></div>
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="text-primary text-center">
              {team.title}
            </h1>
          </div>
          <div className="d-flex">
            <div className="w-25 mr-2">
              <h3 className="text-primary">
                Team Coach
              </h3>
              <CoachCard coach={team.coach} />
              <h3 className="text-white">
                General Coach
              </h3>
              <CoachCard coach={team.coach} />
            </div>
            <div className="w-100">
              <PlayersTable players={team.players} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (<Loading />);
};

export default TeamShowPage;
