import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import ClubInformations from './clubInformations';
import ClubEdit from './clubEdit';
import TeamList from './teamList';

const DashboardAdminTabs = ({club}) => {
  const { TabPane } = Tabs;

  const setupDashboardAdminTabs = () => {
    let content;
    if (club !== undefined) {
      content = (
        <div className="container rounded mt-5" style={{ backgroundColor: '#E8E7E7' }}>
          <br />
          <div className="card-container">
            <Tabs type="card">
              <TabPane tab="Your Club" key="1">
                <ClubInformations club={club} />
              </TabPane>
              <TabPane tab="Edit Club" key="2">
                <ClubEdit club={club} />
              </TabPane>
              <TabPane tab="Your teams" key="3">
                <TeamList teams={club.teams} />
                <Link to="/newTeam">
                  <button type="button" className="btn btn-primary ml-4 mt-4">
                    Add new Team
                  </button>
                </Link>
              </TabPane>
            </Tabs>
          </div>
          <br />
        </div>
      );
    }
    return content;
  };
  return (
    <>
      {setupDashboardAdminTabs()}
    </>
  );
};

export default DashboardAdminTabs;
