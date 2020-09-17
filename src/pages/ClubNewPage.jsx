import React from 'react';
import FormClub from 'components/formClub';

const CreateEvents = () => (
  <div className="py-5">
    <div className="bg-dark w-50 pb-3 p-2 my-3 mx-auto rounded select">
      <h3 className="text-light text-center">Create a club</h3>
    </div>
    <FormClub />
  </div>
);

export default CreateEvents;
