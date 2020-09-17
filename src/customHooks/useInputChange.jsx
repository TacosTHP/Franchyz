import { useState } from 'react';

const useInputChange = (init = {}) => {
  if (typeof init !== 'object') {
    throw (new Error('object is required'));
  }
  const [input, setInput] = useState(init);
  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });

  return [input, handleInputChange, setInput];
};

export default useInputChange;

useInputChange.defaultProps = {
  init: {},
};
