import React from "react";
import TeamList from "./teamList.jsx";
import {Link} from "react-router-dom";
import {Tabs} from "antd";
import InformationsClub from "./informationsClub.jsx";

function DashboardAdminTabs({club}) {
  const {TabPane} = Tabs;
  return (
    <div className="container rounded mt-5" style={{backgroundColor: "#E8E7E7"}}>
      <br />
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Your Club" key="1">
            <InformationsClub club={club} />
          </TabPane>
          <TabPane tab="Your teams" key="2">
            <TeamList teams={club.teams} />
            <Link to="/newTeam">
              <button type="button" className="btn btn-primary ml-4 mt-4">
                Add new Team
              </button>
            </Link>
          </TabPane>
        </Tabs>
      </div>
      <br></br>
    </div>
  );
}

export default DashboardAdminTabs;
