import React from 'react';
import FormTeam from 'components/formTeam';

const CreateTeams = () => (
  <div>
    <div className="bg-dark my-4 pb-3 p-2 w-50 mx-auto rounded select">
      <h3 className="text-light text-center">Add a new team</h3>
    </div>
    <hr className="my-4 w-50" />
    <FormTeam />
  </div>
);

export default CreateTeams;
