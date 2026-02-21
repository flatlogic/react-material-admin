import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
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
import history from '../history';

export default function App() {
  // global
  let { isAuthenticated } = useUserState();
  const isAuth = isAuthenticated();

  return (
    <>
      <SnackbarProvider>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Redirect to='/app/profile' />}
            />

            <Route
              exact
              path='/app'
              render={() => <Redirect to='/app/dashboard' />}
            />

            <Route path='/documentation' component={Documentation} />
            <PrivateRoute path='/app' component={Layout} />
            <PublicRoute path='/login' component={Login} />
            <PublicRoute path='/verify-email' exact component={Verify} />
            <PublicRoute path='/password-reset' exact component={Reset} />
            <Redirect from='*' to='/app/dashboard' />
            <Route component={Error} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={'/login'} />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
