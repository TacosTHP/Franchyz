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

export { pluralyzeType, setupErrorsMessage }
