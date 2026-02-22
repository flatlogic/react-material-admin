import { useEffect } from 'react';
import { useUserDispatch, verifyEmail } from '../../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
const Verify = () => {
  const userDispatch = useUserDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      verifyEmail(token, navigate)(userDispatch);
    }
  }, []);

  return <></>;
};

export default Verify;
