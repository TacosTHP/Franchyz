import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DashboardAdminTabs from 'components/dashboardAdminTabs';
import Calendar from 'components/calendar';
import * as clubAPI from 'services/clubAPI';

import buildFullCalendarEvents from '../helpers/eventsHelpers';

import '../styles/form.scss';

const AdminCoachDashboardPage = () => {
  const myClubId = useSelector((state) => state.userReducer.clubId);
  const [club, setClub] = useState(null);

  const loadClub = async () => {
    const response = await clubAPI.getClub(myClubId);
    setClub(response);
  };

  const setupElements = () => {
    let content;
    if (club !== null) {
      content = (
        <>
          <DashboardAdminTabs club={club} />
          <Calendar attendances={buildFullCalendarEvents(club.attendances)} />
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
