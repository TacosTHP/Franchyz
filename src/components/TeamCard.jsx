import React from 'react';
import { Link } from 'react-router-dom';
import { updateCurrentTeam } from 'redux/actions/resourcesActions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  availablePlayersOfTeam, unavailablePlayersOfTeam, extractFollowingEventFromTeam,
} from 'helpers/teamsHelpers';

import CalendarIcon from 'components/Icons/CalendarIcon';
import UsersGroupIcon from 'components/Icons/UsersGroupIcon';
import SlashUserIcon from 'components/Icons/SlashUserIcon';
import TopRightArrowIcon from 'components/Icons/TopRightArrowIcon';

import 'styles/teamListCard.scss';
import colors from 'styles/_scss-variables.scss';

const TeamCard = ({ team }) => {

  const dispatch = useDispatch();
  const followingEventData = extractFollowingEventFromTeam({ team });

  const setCurrentTeam = () => {
    dispatch(updateCurrentTeam({ team }));
  };

  const eventLink = (eventData) => {
    if (eventData.followingEvent.id !== 0) {
      return `/${eventData.type}/${eventData.followingEvent.id}`;
    }
    return '#';
  };

  return (
    <>
      <div id="team-card" className="card w-25 mx-2 bg-dark" onClick={setCurrentTeam} >

        <div className="d-flex justify-content-between px-2 pt-2 mb-2">
          <h4 className="text-primary team-title ">{team.title}</h4>
          <div className="ml-3">
            <Link to="/"><TopRightArrowIcon size="1.5em" color={colors.whiteColor} /></Link>
          </div>
        </div>

        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center mx-2">
            <UsersGroupIcon size="2em" color={colors.primaryColor} className="mb-2" />
            <div className="text-white d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white players-number">
                {availablePlayersOfTeam({ team })}
              </h5>
              <div className="text-center">
                available players
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mx-2">
            <SlashUserIcon size="2em" color={colors.redColor} className="mb-2" />
            <div className="text-white d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white players-number">
                {unavailablePlayersOfTeam({ team })}
              </h5>
              <div className="text-center">
                unavailable players
              </div>
            </div>
          </div>
        </div>
        <Link to={eventLink(followingEventData)}>
          <div className="d-flex align-items-center my-2 mx-2">
            <CalendarIcon size="1.5em" color={colors.primaryColor} className="mr-3" />
            <div className="text-white event-title">
              {followingEventData.followingEvent.title}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  team: PropTypes.string,
}.isRequired;
