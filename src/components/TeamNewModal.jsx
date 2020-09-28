import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { createTeam } from 'redux/middlewares/teamsMiddlewares';
import useInputChange from 'customHooks/useInputChange';

const TeamNewModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const coachId = useSelector((state) => state.userReducer.id);
  const clubId = useSelector((state) => state.userReducer.clubId);
  const [input, handleInputChange] = useInputChange();

  const submit = () => {
    dispatch(createTeam({ coachId, clubId, ...input }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> New Team </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="teamName">
            Name
            <input id="teamName" name="teamName" className="form-control" onChange={handleInputChange} />
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeamNewModal;

TeamNewModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
