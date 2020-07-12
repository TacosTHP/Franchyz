import React, { useEffect, useState } from 'react';
import '../styles/form.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as clubAPI from 'services/clubAPI';
import DashboardAdminTabs from 'components/dashboardAdminTabs';
import Calendar from 'components/calendar';

const AdminCoachDashboardPage = () => {
  const myClubId = useSelector((state) => state.userReducer.clubId);
  const [club, setClub] = useState();

  const loadClub = async () => {
    const response = await clubAPI.getClub(myClubId);
    console.log(response)
    setClub(response);
  };

  const setupPageOrInvitation = () => {
    let content;
    console.log(myClubId, 'dwe')
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
        <div>
          <h1>Dashboard FRANCHYZ</h1>
          <h4> Your clublllll  </h4>
          <DashboardAdminTabs club={club} />
        </div>
      );
    }
    return content;
  };

  useEffect(() => { loadClub(); }, []);

  return (
    <>
      {setupPageOrInvitation()}
      <br />
    </>
  );
};

export default AdminCoachDashboardPage;
