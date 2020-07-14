import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

import ClubInformations from './clubInformations';
import TeamList from './teamList';

const DashboardPlayerTabs = ({ club }) => {
  const { TabPane } = Tabs;

  return (
    <div className="container rounded mt-5 mb-5 py-3" style={{ backgroundColor: '#E8E7E7' }}>
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Your Club" key="1">
            <ClubInformations club={club} />
          </TabPane>
          <TabPane tab="Your team" key="2">
            <TeamList teams={club.teams} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPlayerTabs;

DashboardPlayerTabs.propTypes = {
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
