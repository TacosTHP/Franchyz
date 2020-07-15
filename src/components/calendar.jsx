import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import '../styles/calendar.scss';

const Calendar = ({ attendances }) => {
  const userType = useSelector((state) => state.authReducer.userType);
  const history = useHistory();

  const goToEventNew = () => {
    if (userType === 'coach') {
      history.push('/newEvent');
    }
  };

  const setupElements = () => {
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
            allDaySlot={false}
            firstDay={1}
            locale="en"
            timeZone="UTC"
            buttonText={{
              today: 'Today',
              day: 'Daily',
              month: 'Monthly',
              week: 'Weekly',
            }}
            events={attendances}
            dateClick={goToEventNew}
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
