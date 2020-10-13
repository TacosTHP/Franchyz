import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SkeletonPage from 'components/SkeletonPage';
import InvitationToCreateClub from 'components/InvitationToCreateClub';
import TeamList from 'components/TeamList';
import TeamInfo from 'components/TeamInfo';
import ClubInformations from 'components/ClubInformations';
import Calendar from 'components/Calendar';
import { getClub } from 'redux/middlewares/clubsMiddlewares';

import '../styles/form.scss';

const AdminCoachDashboardPage = () => {
  const [resourceToDisplay, setResourceToDisplay] = useState(null);
  const loading = useSelector((state) => state.authReducer.loading);
  const clubId = useSelector((state) => state.userReducer.clubId);
  const currentClub = useSelector((state) => state.resourcesReducer.currentClub);
  const currentTeam = useSelector((state) => state.resourcesReducer.currentTeam);
  const dispatch = useDispatch();

  const loadClub = async () => {
    await dispatch(getClub({ clubId }));
  };

  useEffect(() => { loadClub(); }, []);

  useEffect(() => {
    if (currentTeam !== null) {
      setResourceToDisplay(currentTeam);
    } else {
      setResourceToDisplay(currentClub);
    }
  }, [currentTeam, currentClub]);

  if (loading) {
    return (<SkeletonPage />);
  }

  if (currentClub === null) {
    return (<InvitationToCreateClub />);
  }

  return (
    <div className="layoutPage">
      <div id="dashboardContainer" className="container">
        <div className="row">
          <div id="tabsAdmin" className="col-8">
            <h4> Main Dashboard </h4>
            <Tabs defaultActiveKey="main">
              <Tab eventKey="main" title="Main">
                <div id="teamListContainer" className="container">
                  <TeamList teams={currentClub.teams} />
                </div>
                <div id="teamInfoContainer" className="container mt-3">
                  <TeamInfo teams={currentClub.teams} team={currentTeam} />
                </div>
              </Tab>

              <Tab eventKey="clubInfo" title="Club Info">
                <ClubInformations club={currentClub} />
              </Tab>

              <Tab eventKey="settings" title="Settings">
                <p> soon... </p>
              </Tab>
            </Tabs>
          </div>
          <div id="calendarContainer" className="col-4">
            <Calendar resourceToDisplay={resourceToDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCoachDashboardPage;
