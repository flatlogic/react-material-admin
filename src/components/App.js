import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { SnackbarProvider } from './Snackbar';

// components
import Layout from './Layout';
import Documentation from './Documentation/Documentation';

// pages
import Error from '../pages/error';
import Login from '../pages/login';
import Verify from '../pages/verify';
import Reset from '../pages/reset';

// context
import { useUserState } from '../context/UserContext';
import { setNavigator } from '../router/navigation';

export default function App() {
  // global
  let { isAuthenticated } = useUserState();
  const isAuth = isAuthenticated();
  const routerBase = import.meta.env.BASE_URL || '/';

  return (
    <>
      <SnackbarProvider>
        <BrowserRouter basename={routerBase}>
          <RouterNavigatorSync />
          <Routes>
            <Route path='/' element={<Navigate to='/app/profile' replace />} />
            <Route
              path='/app'
              element={<Navigate to='/app/dashboard' replace />}
            />
            <Route path='/403' element={<Error code={403} />} />
            <Route path='/500' element={<Error code={500} />} />
            <Route path='/documentation/*' element={<Documentation />} />
            <Route
              path='/app/*'
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path='/verify-email'
              element={
                <PublicRoute>
                  <Verify />
                </PublicRoute>
              }
            />
            <Route
              path='/password-reset'
              element={
                <PublicRoute>
                  <Reset />
                </PublicRoute>
              }
            />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );

  // #######################################################################

  function PrivateRoute({ children }) {
    if (!isAuth) {
      return <Navigate to='/login' replace />;
    }

    return children;
  }

  function PublicRoute({ children }) {
    if (isAuth) {
      return <Navigate to='/' replace />;
    }

    return children;
  }
}

function RouterNavigatorSync() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setNavigator(navigate);
    return () => setNavigator(null);
  }, [navigate]);

  return null;
}
