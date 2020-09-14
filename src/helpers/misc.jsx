import React from 'react';

const pluralyzeType = (type) => {
  let answer;
  if (type === 'coach') {
    answer = 'coaches';
  } else if (type === 'player') {
    answer = 'players';
  }
  return answer;
};

const setupErrorsMessage = (errors) => {
  let errorsMessage = '';
  if (typeof errors === 'object') {
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
  } else {
    errorsMessage = errors;
  }
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
