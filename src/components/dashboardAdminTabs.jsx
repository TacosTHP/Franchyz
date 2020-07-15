import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

import ClubInformations from './clubInformations';
import ClubEdit from './clubEdit';
import TeamList from './teamList';

const DashboardAdminTabs = ({ club }) => {
  const { TabPane } = Tabs;

  return (
    <div className="container rounded mt-3 mb-5 pt-3 pb-3" style={{ backgroundColor: '#E8E7E7' }}>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Your Club" key="1">
            <ClubInformations club={club} />
            <Link to="/eventNewPage">
              <button type="button" className="btn btn-primary ml-4 mt-4">
                Add Event
              </button>
            </Link>
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
    </div>
  );
};

export default DashboardAdminTabs;

DashboardAdminTabs.propTypes = {
  club: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    logo_url: PropTypes.string,
    address: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    league: PropTypes.string,
    pool: PropTypes.string,
    conference: PropTypes.string,
    date_of_creation: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.object),
    players: PropTypes.arrayOf(PropTypes.object),
    attendances: PropTypes.objectOf(PropTypes.array),
  }).isRequired,
};
