import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetErrorMessage } from 'redux/actions/authActions';
import { message } from 'antd';

const ErrorAlert = () => {
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage !== null) {
      message.error(errorMessage, 2.5);
      dispatch(resetErrorMessage());
    }
  }, [errorMessage, dispatch]);
  return (
    <>
    </>
  );
};

export default ErrorAlert;
