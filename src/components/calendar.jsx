import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import buildFullCalendarEvents from '../helpers/eventsHelpers';

import '../styles/calendar.scss';

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

  const setupElements = () => {
    const buildedAttendances = buildFullCalendarEvents(attendances);
    let content;
    if (attendances !== undefined) {
      content = (
        <>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            defaultView="timeGridDay"
            themeSystem="bootstrap"
            height="auto"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
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
            events={buildedAttendances}
            dateClick={goToEventNew}
            eventClick={goToEvent}
          />
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
