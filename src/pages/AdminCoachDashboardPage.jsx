import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Loading from 'components/Loading';
import InvitationToCreateClub from 'components/InvitationToCreateClub';
import TeamList from 'components/teamList';
import TeamInfo from 'components/TeamInfo';
import ClubInformations from 'components/ClubInformations';
import Calendar from 'components/Calendar';
import { getClub } from 'redux/middlewares/clubsMiddlewares';

import '../styles/form.scss';

const AdminCoachDashboardPage = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const clubId = useSelector((state) => state.userReducer.clubId);
  const currentClub = useSelector((state) => state.resourcesReducer.currentClub);
  const currentTeam = useSelector((state) => state.resourcesReducer.currentTeam);
  const currentAttendances = useSelector((state) => state.resourcesReducer.currentAttendances);
  const dispatch = useDispatch();

  const loadClub = async () => {
    await dispatch(getClub({ clubId }));
  };

  useEffect(() => { loadClub(); }, []);

  if (loading) {
    return (<Loading />);
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
                  <TeamInfo team={currentTeam} />
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
            <Calendar attendances={currentAttendances} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCoachDashboardPage;
