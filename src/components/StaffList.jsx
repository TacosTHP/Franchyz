import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TopRightArrowIcon from 'components/Icons/TopRightArrowIcon';

import 'styles/staffList.scss';
import variables from 'styles/_scss-variables.scss';

const StaffList = ({ teams, index }) => {
  const setupCoaches = () => {
    const teamCoaches = [];
    let coaches;
    if (index !== undefined) {
      const currentTeam = teams.find((team) => team.id === index);
      coaches.push(currentTeam.coach);
    } else {
      teams.forEach((team) => {
        if (team.coach) {
          teamCoaches.push(team.coach);
        }
      });
      coaches = Array.from(new Set(teamCoaches.map((coach) => coach.id)))
        .map((id) => ({
          id,
          'admin?': teamCoaches.find((coach) => coach.id === id)['admin?'],
          club_id: teamCoaches.find((coach) => coach.id === id).club_id,
        }));
    }
    return coaches;
  };

  const setupPlayers = () => {
    let players = [];
    if (index !== undefined) {
      const currentTeam = teams.find((team) => team.id === index);
      players = currentTeam.players;
    } else {
      teams.forEach((team) => {
        team.players.forEach((player) => {
          players.push(player);
        });
      });
    }
    return players;
  };

  const setupAvatarGroup = (users) => {
    let content;
    if (users !== undefined) {
      if (users.length > 2) {
        const twoFirstUsers = users.slice(0, 2);
        const usersLeft = users.slice(2);
        const iconGroup = twoFirstUsers.map((user) => <div className="d-flex justify-content-center align-items-center circle bg-primary mx-1 text-white font-weight-bold">{user.id}</div>);
        content = (
          <>
            {iconGroup}
            <div className="d-flex justify-content-center align-items-center circle bg-secondary mx-1 text-white font-weight-bold">{`+ ${usersLeft.length}`}</div>
          </>
        );
      } else {
        const user = users[0];
        content = (
          <>
            <div className="d-flex justify-content-center align-items-center circle bg-secondary mx-1 text-white font-weight-bold">{user.id}</div>
          </>
        );
      }
    }
    return content;
  };

  let content;
  if (teams !== undefined) {
    content = (
      <>
        <h3 className="text-primary">Staff & Players</h3>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column bg-dark w-50 px-3 py-2 my-3 mx-2 rounded">
            <div className="ml-auto mr-2 mt-2">
              <Link to="/"><TopRightArrowIcon size="1.5em" color={variables.whiteColor} /></Link>
            </div>
            <h4 className="text-white">Coaches</h4>
            <div className="d-flex">
              <div className="text-primary font-weight-bold mr-2">
                {setupCoaches().length}
              </div>
              <div className="text-white">
                Coaches
              </div>
            </div>
            <div className="d-flex my-2">
              {setupAvatarGroup(setupCoaches())}
            </div>
          </div>
          <div className="d-flex flex-column bg-dark w-50 px-3 py-2 my-3 mx-2 rounded">
            <div className="ml-auto mr-2 mt-2">
              <Link to="/"><TopRightArrowIcon size="1.5em" color={variables.whiteColor} /></Link>
            </div>
            <h4 className="text-white">Players</h4>
            <div className="d-flex">
              <div className="text-primary font-weight-bold mr-2">
                {setupPlayers().length}
              </div>
              <div className="text-white">
                Players
              </div>
            </div>
            <div className="d-flex my-2">
              {setupAvatarGroup(setupPlayers())}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h3>No personnel yet !</h3>
      </>
    );
  }
  return content;
};

export default StaffList;

StaffList.propTypes = {
  coaches: PropTypes.shape(),
  players: PropTypes.shape(),
}.isRequired;
