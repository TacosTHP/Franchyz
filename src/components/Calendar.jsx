import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateCurrentTeam } from 'redux/actions/resourcesActions';

import prepareAttendancesForFullCalendar from 'helpers/attendancesHelpers';

import TeamsColorsCaption from 'components/TeamsColorsCaption';
import CalendarIcon from 'components/Icons/CalendarIcon';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import 'styles/calendar.scss';

const Calendar = ({ resourceToDisplay }) => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.authReducer.userType);
  const currentTeam = useSelector((state) => state.resourcesReducer.currentTeam);
  const history = useHistory();
  const events = prepareAttendancesForFullCalendar({ attendancesOwners: resourceToDisplay });

  const allTeamsEvents = () => {
    dispatch(updateCurrentTeam({ team: null }));
  };

  const setupAllEventsButton = () => {
    if (currentTeam !== null) {
      return (
        <PrimaryButton text="See all Events" onClick={allTeamsEvents} icon={<CalendarIcon />} />
      );
    }
    return (
      <>
      </>
    );
  };

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
    let content;
    if (events !== undefined) {
      content = (
        <div className="h-100 d-flex flex-column align-items-center">
          <div className="w-100 d-flex mb-2">
            {setupAllEventsButton()}
            <div className="align-self-end ml-auto">
              <TeamsColorsCaption />
            </div>
          </div>
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              defaultView="timeGridDay"
              themeSystem="standard"
              height="parent"
              header={{
                left: 'timeGridDay,dayGridWeek',
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
              events={events}
              dateClick={goToEventNew}
              eventClick={goToEvent}
            />
          </div>
        </div>
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
    <>
      { setupElements() }
    </>
  );
};

export default Calendar;

Calendar.propTypes = {
  attendances: PropTypes.arrayOf(PropTypes.object).isRequired,
};
