import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { message } from 'antd';

const ErrorAlert = () => {
  const errorMessage = useSelector((state) => state.authReducer.error);
  useEffect(() => {
    if (errorMessage !== null) {
      message.error(errorMessage, 2.5);
    }
  }, [errorMessage]);
  return (
    <>
    </>
  );
};

export default ErrorAlert;
