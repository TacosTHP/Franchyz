import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const followingEventData = extractFollowingEventFromTeam({ team });

  return (
    <>
      <div id="team-card" className="card w-25 mx-2 bg-dark">

        <div className="ml-auto mr-2 mt-2">
          <Link to="/"><TopRightArrowIcon size="1.5em" color={colors.whiteColor} /></Link>
        </div>

        <h4 className="card-header mh-25 text-primary">{team.title}</h4>
        <div className="card-body d-flex justify-content-center align-items-center h-50">
          <div className="d-flex flex-column align-items-center mx-2">
            <UsersGroupIcon size="2em" color={colors.primaryColor} className="mb-3" />
            <div className="text-white d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white">
                {availablePlayersOfTeam({ team })}
              </h5>
              <div className="text-center">
                available players
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mx-2">
            <SlashUserIcon size="2em" color={colors.redColor} className="mb-3" />
            <div className="text-white d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white">
                {unavailablePlayersOfTeam({ team })}
              </h5>
              <div className="text-center">
                unavailable players
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <CalendarIcon size="2em" color={colors.primaryColor} />
          <div className="text-white">
            <Link to={`/${followingEventData.type}/${followingEventData.followingEvent.id}`}>{followingEventData.followingEvent.title}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  team: PropTypes.string,
}.isRequired;
