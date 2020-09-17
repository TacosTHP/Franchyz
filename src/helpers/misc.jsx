import React from 'react';

function pluralyzeType(type) {
  if(type === 'coach')
    return 'coaches'
  else if(type === 'player')
    return 'players'
}

const setupErrorsMessage = (errors) => {
  let errorsMessage = '';
  const entries = Object.entries(errors);
  entries.forEach(([key, value]) => {
    value.forEach((error) => {
      errorsMessage = (
        <>
          {errorsMessage}
          {`${key} ${error}`}
          <br />
        </>
      );
    });
  });
  errorsMessage = (
    <p>
      {errorsMessage}
    </p>
  );
  return errorsMessage;
};

const purgeInput = ({ input }) => {
  const purgedInput = { ...input };
  const keys = Object.keys(purgedInput);
  keys.forEach((key) => {
    if (!(key === 'teamId' || key === 'players' || key === 'eventType')) {
      delete purgedInput[key];
    }
  });
  return purgedInput;
};

export { pluralyzeType, setupErrorsMessage, purgeInput };
