import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import themes from '../themes';
import Layout from './Layout';
import Error from '../pages/error';
import Login from '../pages/login';

const theme = createMuiTheme(themes.default.theme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
        <Route path="/app" component={Layout} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;