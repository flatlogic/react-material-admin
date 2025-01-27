import React, { useEffect } from 'react';
import { useUserDispatch, verifyEmail } from '../../context/UserContext';
import { useLocation, useHistory } from 'react-router-dom';
const Verify = () => {
  const userDispatch = useUserDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      verifyEmail(token, history)(userDispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Verify;
