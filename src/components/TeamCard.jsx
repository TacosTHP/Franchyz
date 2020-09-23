import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CalendarIcon from 'components/Icons/CalendarIcon';
import UsersGroupIcon from 'components/Icons/UsersGroupIcon';
import SlashUserIcon from 'components/Icons/SlashUserIcon';
import TopRightArrowIcon from 'components/Icons/TopRightArrowIcon';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import 'styles/teamListCard.scss';

import variables from 'styles/_scss-variables.scss';

const TeamCard = ({ team }) => {
  const setupAvailablePlayers = (players) => {
    const availablePlayers = [];
    if (players !== undefined) {
      players.forEach((player) => {
        if (player['availability?']) {
          availablePlayers.push(player);
        }
      });
    }
    return availablePlayers;
  };

  const setupUnavailablePlayers = (players) => {
    const unavailablePlayers = [];
    if (players !== undefined) {
      players.forEach((player) => {
        if (!player['availability?']) {
          unavailablePlayers.push(player);
        }
      });
    }
    return unavailablePlayers;
  };

  const setupFollowingEvent = ({ games, practices }) => {
    const today = new Date();

    const compareGamesDates = (firstGame, secondGame) => {
      let response;
      if (
        firstGame.starting_date_time - today > secondGame.startring_date_time - today
        && secondGame.startring_date_time - today > 0
      ) {
        response = true;
      }
      return response;
    };

    const comparePracticesDates = (firstPractice, secondPractice) => {
      let response;
      if (
        firstPractice.starting_date_time - today > secondPractice.startring_date_time - today
        && secondPractice.startring_date_time - today > 0
      ) {
        response = true;
      }
      return response;
    };

    const findFollowingGame = (gamesArray) => {
      let followingGame;
      if (gamesArray !== undefined) {
        followingGame = gamesArray.find((game) => game.starting_date_time > today);
        if (followingGame !== undefined) {
          gamesArray.forEach((game) => {
            if (compareGamesDates(followingGame, game)) {
              followingGame = game;
            }
          });
        }
      }
      return followingGame;
    };

    const findFollowingPractice = (practicesArray) => {
      let followingPractice;
      if (practicesArray !== undefined) {
        followingPractice = practicesArray.find((practice) => practice.starting_date_time > today);
        if (followingPractice !== undefined) {
          practicesArray.forEach((game) => {
            if (comparePracticesDates(followingPractice, game)) {
              followingPractice = game;
            }
          });
        }
      }
      return followingPractice;
    };

    const compareEventsDates = (game, practice) => {
      let followingEvent;
      if (game !== undefined && practice !== undefined) {
        const gameToToday = game.starting_date_time - today;
        const practiceToToday = practice.starting_date_time - today;
        if (Math.min(gameToToday, practiceToToday) === practiceToToday) {
          followingEvent = practice;
        } else {
          followingEvent = game;
        }
      }
      return followingEvent;
    };

    const buildFollowingEvent = (followingEvent) => {
      let content;
      if (followingEvent !== undefined) {
        if (followingEvent.away_team_score !== undefined) {
          content = (
            <>
              <Link to={`/games/${followingEvent.id}`}>{followingEvent.title}</Link>
            </>
          );
        } else {
          content = (
            <>
              <Link to={`/practices/${followingEvent.id}`}>{followingEvent.title}</Link>
            </>
          );
        }
      }
      content = (
        <div>
          No scheduled events yet
        </div>
      );
      return content;
    };

    return buildFollowingEvent(
      compareEventsDates(
        findFollowingGame(games),
        findFollowingPractice(practices),
      ),
    );
  };

  let content;
  if (team !== undefined) {
    content = (
      <>
        <div id="team-card" className="card w-25 mx-2 bg-dark">
          <div className="ml-auto mr-2 mt-2">
            <Link to="/"><TopRightArrowIcon size="1.5em" color={variables.whiteColor} /></Link>
          </div>
          <h4 className="card-header mh-25 text-primary">{team.title}</h4>
          <div className="card-body d-flex justify-content-center align-items-center h-50">
            <div className="d-flex flex-column align-items-center mx-2">
              <UsersGroupIcon size="2em" color={variables.primaryColor} className="mb-3" />
              <div className="text-white d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white">
                  {setupAvailablePlayers(team.players).length}
                </h5>
                <div className="text-center">
                  available players
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center mx-2">
              <SlashUserIcon size="2em" color={variables.redColor} className="mb-3" />
              <div className="text-white d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white">
                  {setupUnavailablePlayers(team.players).length}
                </h5>
                <div className="text-center">
                  unavailable players
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <CalendarIcon size="2em" color={variables.primaryColor} />
            <div className="text-white">
              {setupFollowingEvent(team.attendances)}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div id="team-card" className="card d-flex justify-content-center align-items-center w-25 mx-2 bg-dark">
          <div>
            <PrimaryButton text="Create Team" icon="" url="/newTeam" />
          </div>
        </div>
      </>
    );
  }
  return content;
};

export default TeamCard;

TeamCard.propTypes = {
  team: PropTypes.string,
}.isRequired;
