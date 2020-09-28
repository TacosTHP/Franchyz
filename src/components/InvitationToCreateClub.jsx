import React from 'react';
import { Link } from 'react-router-dom';

const InvitationToCreateClub = () => (
  <>
    <div>
      <h1> Welcome to FRANCHYZ </h1>
      <h4> You just created an acccount for your sport club. </h4>
      <h4> Start creating a club and adding a team before you start creating events. </h4>
    </div>
    <Link to="/newClub">
      <button type="button" className="btn btn-primary mt-4 ml-3"> Create club </button>
    </Link>
  </>
);

export default InvitationToCreateClub;
