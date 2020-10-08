import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import prepareAttendancesForFullCalendar from 'helpers/attendancesHelpers';

import TeamsColorsCaption from 'components/TeamsColorsCaption';
import QuestionMarkIcon from 'components/Icons/QuestionMarkIcon';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import 'styles/calendar.scss';

const Calendar = ({ resourceToDisplay }) => {
  const [show, setShow] = useState(false);
  const userType = useSelector((state) => state.authReducer.userType);
  const history = useHistory();
  const events = prepareAttendancesForFullCalendar({ attendancesOwners: resourceToDisplay });

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
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
          <button type="button" className="caption-button text-primary" onClick={handleShow}>
            <QuestionMarkIcon />
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-dark text-primary" closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white"><TeamsColorsCaption /></Modal.Body>
            <Modal.Footer className="bg-dark">
              <button type="button" className="btn btn-primary text-white" onClick={handleClose}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              defaultView="timeGridDay"
              themeSystem="standard"
              height="parent"
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
