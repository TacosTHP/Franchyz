import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DashboardAdminTabs from 'components/dashboardAdminTabs';
import Calendar from 'components/Calendar';
import Navbar from 'components/layouts/navbar';

import buildFullCalendarEvents from 'helpers/eventsHelpers';
import * as content from 'helpers/contentHelpers';

import * as clubAPI from 'services/clubAPI';

import 'styles/form.scss';

const AdminCoachDashboardPage = () => {
  const myClubId = useSelector((state) => state.userReducer.clubId);
  const userType = useSelector((state) => state.authReducer.userType);
  const [club, setClub] = useState(null);
  const { clubReducer } = content;
  // clubReducer.currentTeam = 4;

  const loadClub = async () => {
    const response = await clubAPI.getClub(myClubId);
    setClub(response);
  };

  const setupEvents = () => (
    buildFullCalendarEvents(userType, clubReducer.currentTeams, clubReducer.currentTeam)
  );

  const setupElements = () => {
    let yocontent;
    if (club !== null) {
      yocontent = (
        <>
          <Navbar />
          <DashboardAdminTabs club={club} />
          <Calendar attendances={setupEvents()} />
        </>
      );
    } else {
      yocontent = (
        <p> loading... </p>
      );
    }
    return yocontent;
  };

  const setupPageOrInvitation = () => {
    let yocontent;
    if (myClubId === null) {
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
      yocontent = (
        <>
          <h1>Dashboard FRANCHYZ</h1>
          <h4> Your club </h4>
          { setupElements() }
        </>
      );
    }
    return yocontent;
  };

  useEffect(() => { loadClub(); }, []);

  return (
    <div className="container mb-3 mt-3">
      {setupPageOrInvitation()}
    </div>
  );
};

export default AdminCoachDashboardPage;
