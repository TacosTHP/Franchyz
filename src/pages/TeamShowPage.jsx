import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Loading from 'components/Loading';
import CoachCard from 'components/CoachCard';
import CoachDashboardNavbar from 'components/layouts/CoachDashboardNavbar';
import PlayersTable from 'components/PlayersTable';
import LeftArrowIcon from 'components/Icons/LeftArrowIcon';
import Calendar from 'components/Calendar';
import EventCard from 'components/EventCard';

import { extractFollowingEventFromTeam } from 'helpers/teamsHelpers';

import { getTeam } from 'redux/middlewares/teamsMiddlewares';

import 'styles/teamShowPage.scss';

const TeamShowPage = () => {
  const { clubId, teamId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const currentTeam = useSelector((state) => state.resourcesReducer.currentTeam);

  const goToDashboard = () => {
    history.push('/dashboardAdmin');
  };

  const loadTeam = async () => {
    await dispatch(getTeam({ clubId, teamId }));
  };

  useEffect(() => {
    loadTeam();
  }, []);

  if (loading) {
    return (<Loading />);
  }

  if (currentTeam !== null) {
    return (
      <div className="black-background">
        <CoachDashboardNavbar club />
        <div className="p-3">
          <div className="mr-auto text-primary" onClick={goToDashboard}><LeftArrowIcon size="2em" /></div>
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="text-primary text-center">
              {currentTeam.title}
            </h1>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-primary">
            <Tabs defaultActiveKey="personel" centered="true">
              <Tab eventKey="personel" title="Staff & Players" tabClassName="bg-dark text-primary">
                <div className="d-flex">
                  <div className="w-25 mr-2">
                    <h3 className="text-white">
                      Team Coach
                    </h3>
                    <CoachCard coach={currentTeam.coach} />
                  </div>
                  <div className="w-75">
                    <h3 className="text-white">
                      Roster
                    </h3>
                    <PlayersTable
                      players={currentTeam.players}
                      club={currentTeam.club}
                      team={currentTeam}
                    />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="events" title="Events" tabClassName="bg-dark text-primary">
                <div className="d-flex">
                  <div className="w-25 mr-2">
                    <h3 className="text-white">
                      Next Event
                    </h3>
                    <EventCard
                      event={extractFollowingEventFromTeam({ team: currentTeam }).followingEvent}
                    />
                  </div>
                  <div className="w-75">
                    <h3 className="text-white">
                      Calendar
                    </h3>
                    <Calendar resourceToDisplay={currentTeam} />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
  return (<Loading />);
};

export default TeamShowPage;
