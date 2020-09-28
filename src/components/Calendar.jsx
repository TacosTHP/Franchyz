import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import 'styles/calendar.scss';

const Calendar = ({ attendances }) => {
  const userType = useSelector((state) => state.authReducer.userType);
  const history = useHistory();

  const goToEventNew = () => {
    if (userType === 'coach') {
      history.push('/newEvent');
    }
  };

  const goToEvent = ({ event }) => {
    if (event !== undefined) {
      if (event.extendedProps.type === 'practice') {
        history.push(`/practices/${event.extendedProps.practice_id}`);
      } else if (event.extendedProps.type === 'game') {
        history.push(`/games/${event.extendedProps.game_id}`);
      }
    }
  };

  const setupCaption = () => {
    const practiceStyling = (color) => (
      {
        color,
        borderColor: color,
      }
    );

    const gameStyling = (color) => (
      {
        backgroundColor: color,
        borderColor: color,
      }
    );
    const obj = JSON.parse(Cookies.get('teamsColors'));
    if (obj !== undefined) {
      return Object.keys(obj).map((team) => (
        <div key={team} className="d-flex flex-column justify-content-center align-items-center my-3">
          <div className="text-white font-weight-bold mb-3">
            {team}
          </div>
          <div className="d-flex justify-content-around w-75">
            <div className="d-flex justify-content-center rounded p-3 text-white font-weight-bold w-25" style={gameStyling(obj[team])}>
              GAME
            </div>
            <div className="d-flex justify-content-center rounded p-3 bg-white font-weight-bold w-25" style={practiceStyling(obj[team])}>
              PRACTICE
            </div>
          </div>
        </div>
      ));
    }
  };

  const setupElements = () => {
    const buildedAttendances = attendances;
    let content;
    if (attendances !== undefined) {
      content = (
        <>
          <div className="">
            <div className="bg-dark border rounded w-50 mx-auto p-3">
              <h3 className="text-white">
                Caption
              </h3>
              <div className="d-flex flex-column justify-content-around">
                {setupCaption()}
              </div>
            </div>
            <div>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                defaultView="timeGridDay"
                themeSystem="bootstrap"
                height="auto"
                header={{
                  left: '',
                  center: 'title',
                  right: 'prev,next',
                }}
                buttonText={{
                  today: 'Today',
                  day: 'Daily',
                  month: 'Monthly',
                  week: 'Weekly',
                }}
                navLinks
                allDaySlot={false}
                firstDay={1}
                locale="en"
                timeZone="UTC"
                minTime="08:00"
                maxTime="23:59"
                eventTimeFormat={{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: false,
                }}
                events={attendances}
                dateClick={goToEventNew}
                eventClick={goToEvent}
              />
            </div>
            <div>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                defaultView="dayGridMonth"
                themeSystem="bootstrap"
                height="auto"
                header={{
                  left: '',
                  center: '',
                  right: '',
                }}
                navLinks
                allDaySlot={false}
                firstDay={1}
                locale="en"
                timeZone="UTC"
                minTime="08:00"
                maxTime="23:59"
                eventTimeFormat={{
                  hour: 'numeric',
                  minute: '2-digit',
                  meridiem: false,
                }}
                events={attendances}
                dateClick={goToEventNew}
                eventClick={goToEvent}
              />
            </div>
          </div>
        </>
      );
    } else {
      content = (
        <div>
          <h2>No events booked yet mate.......</h2>
        </div>
      );
    }
    return content;
  };

  return (
    <div>
      { setupElements() }
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  attendances: PropTypes.arrayOf(PropTypes.object).isRequired,
};
