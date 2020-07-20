import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EventNewForm from 'components/EventNewForm';
import * as teamAPI from 'services/teamAPI';

const EventNewPage = () => {
  const [teams, setTeams] = useState(null);
  const clubId = useSelector((state) => state.userReducer.clubId);

  const setupLoadingOrEventNewForm = () => {
    let content;
    if (teams === null) {
      content = <p> loading </p>;
    } else {
      content = <EventNewForm teams={teams} />;
    }
    return content;
  };

  useEffect(() => {
    const loadTeams = async () => {
      const response = await teamAPI.getTeams({ clubId });
      setTeams(response);
    };
    loadTeams();
  }, []);

  return (
    <>
      <h3> NewEvent !! </h3>
      {setupLoadingOrEventNewForm()}
    </>
  );
};

export default EventNewPage;
