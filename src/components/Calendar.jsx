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

  if (events === undefined) {
    return (
      <div>
        <h2>No events booked yet mate.......</h2>
      </div>
    );
  }

  return (
    <>
      <div className="h-100 d-flex flex-column align-items-center">
        <div className="w-100 d-flex mb-2">
          {setupAllEventsButton()}
          <div className="align-self-end ml-auto">
            <TeamsColorsCaption currentTeam={currentTeam} />
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
    </>
  );
};

export default Calendar;

Calendar.propTypes = {
  resourceToDisplay: PropTypes.oneOfType([
    PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      conference: PropTypes.string,
      country: PropTypes.string,
      date_of_creation: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      league: PropTypes.string,
      logo_url: PropTypes.string,
      name: PropTypes.string,
      pool: PropTypes.string,
      teams: PropTypes.arrayOf(PropTypes.object),
      zip_code: PropTypes.string,
    }),
    PropTypes.shape({
      club_id: PropTypes.number,
      coach: PropTypes.shape({
        'admin?': PropTypes.bool,
        arrival: PropTypes.string,
        birthdate: PropTypes.string,
        club_id: PropTypes.number,
        created_at: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        id: PropTypes.number,
        last_name: PropTypes.string,
        phone: PropTypes.string,
        updated_at: PropTypes.string,
      }),
      creator_id: PropTypes.number,
      id: PropTypes.number,
      players: PropTypes.arrayOf(PropTypes.object),
      title: PropTypes.string,
    }),
  ]).isRequired,
};
