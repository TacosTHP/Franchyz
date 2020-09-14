import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetError } from 'redux/actions/authActions';
import { message } from 'antd';

const ErrorAlert = () => {
  const errorMessage = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage !== null) {
      message.error(errorMessage, 2.5);
      dispatch(resetError());
    }
  }, [errorMessage]);
  return (
    <>
    </>
  );
};

export default ErrorAlert;
