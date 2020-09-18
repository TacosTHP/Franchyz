import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetUrl } from 'redux/actions/authActions';

const Connect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const url = useSelector((state) => state.authReducer.url);

  useEffect(() => {
    if (url !== null) {
      history.push(url);
      dispatch(resetUrl());
    }
  }, [url, dispatch, history]);

  return (
    <>
    </>
  );
};

export default Connect;
