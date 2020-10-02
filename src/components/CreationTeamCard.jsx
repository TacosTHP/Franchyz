import React from 'react';
import CalendarIcon from 'components/Icons/CalendarIcon';
import PrimaryButton from 'components/Buttons/PrimaryButton';
import colors from 'styles/_scss-variables.scss';
import 'styles/teamListCard.scss';

const CreationTeamCard = () => (
  <>
    <div id="team-card" className="card rounded w-100 h-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="card-body d-flex justify-content-center align-items-center">
        <PrimaryButton text="Meet my Team now !" icon={<CalendarIcon size="2em" color={colors.primaryColor} />} url="/register" />
      </div>
    </div>
  </>
);

export default CreationTeamCard;
