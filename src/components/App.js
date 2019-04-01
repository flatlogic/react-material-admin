import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import themes from '../themes';
import Layout from './Layout';
import Error from '../pages/error';

const theme = createMuiTheme(themes.default.theme);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/dashboard" />} />
        <Route path="/app" component={Layout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;