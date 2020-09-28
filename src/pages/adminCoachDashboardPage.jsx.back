import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DashboardAdminTabs from 'components/dashboardAdminTabs';
import Calendar from 'components/Calendar';

import { getClub } from 'redux/middlewares/clubsMiddlewares';
import buildFullCalendarEvents from 'helpers/eventsHelpers';

import 'styles/form.scss';

const AdminCoachDashboardPage = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const currentClub = useSelector((state) => state.resourcesReducer.currentClub);
  const userType = useSelector((state) => state.authReducer.userType);
  const dispatch = useDispatch();

  const loadClub = async () => {
    await dispatch(getClub({ clubId }));
  };

  const setupEvents = () => (
    buildFullCalendarEvents(userType, currentClub.teams, currentClub.currentTeam)
  );

  const setupElements = () => {
    let content;
    if (currentClub !== null) {
      content = (
        <>
          <DashboardAdminTabs club={currentClub} />
          <Calendar attendances={setupEvents()} />
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
    if (clubId === null) {
      content = (
        <>
          <div>
            <h1> Welcome to FRANCHYZ </h1>
            <h4> You just created an acccount for your sport club. </h4>
            <h4> Start creating a club and adding a team before you start creating events. </h4>
          </div>
          <Link to="/newClub">
            <button type="button" className="btn btn-primary mt-4 ml-3"> Create club </button>
          </Link>
        </>
      );
    } else {
      content = (
        <>
          <h1>Dashboard FRANCHYZ</h1>
          <h4> Your club </h4>
          { setupElements() }
        </>
      );
    }
    return content;
  };

  useEffect(() => { loadClub(); }, []);

  return (
    <div className="container mb-3 mt-3">
      {setupPageOrInvitation()}
    </div>
  );
};

export default AdminCoachDashboardPage;
