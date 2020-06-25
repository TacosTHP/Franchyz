import React, {useEffect, useState} from "react";
import "../styles/form.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import * as clubAPI from "services/clubAPI.jsx";
import DashboardAdminTabs from "components/dashboardAdminTabs.jsx";

function AdminCoachDashboardPage() {
  const clubId = useSelector((state) => state.userReducer.clubId);

  const [club, setClub] = useState("");

  useEffect(() => {
    loadClub();
  }, []);

  const loadClub = async () => {
    const response = await clubAPI.getClub(clubId);
    setClub(response);
  }

  return (
    <>
      <div className="text-center mt-5">
        {clubId === null ? (
          <div>
            <h1>Welcome to FRANCHYZ</h1>
            <h4>You just created an acccount for your sport club.</h4>
            <h4>
              Start creating a club and adding a team before you start creating events.
            </h4>
          </div>
        ) : (
          <div>
            <h1>Dashboard FRANCHYZ</h1>
            <h4>
              Start creating a club and adding a team before you start creating events.
            </h4>
          </div>
        )}

        {clubId === null ? (
          <Link to="/newClub">
            <button type="button" className="btn btn-primary mt-4 ml-3">
              Create club
            </button>
          </Link>
        ) : (
          <Link to="/newEvent">
            <button type="button" className="btn btn-primary mt-4 ml-4">
              Create event
            </button>
          </Link>
        )}
      </div>

      <DashboardAdminTabs club={club} />

      <br />
    </>
  );
}

export default AdminCoachDashboardPage;
