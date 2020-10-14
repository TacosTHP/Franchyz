import React from 'react';
import FootballHelmetIcon from 'components/Icons/FootballHelmetIcon';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import 'styles/teamListCard.scss';

const CreationTeamCard = () => (
  <>
    <div id="team-card" className="card rounded w-100 h-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="card-body d-flex justify-content-center align-items-center">
        <PrimaryButton text="Create New Team" icon={<FootballHelmetIcon />} url="/newTeam" />
      </div>
    </div>
  </>
);

export default CreationTeamCard;
