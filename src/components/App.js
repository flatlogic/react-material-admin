import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import jwt from "jsonwebtoken";

// components
import Layout from "./Layout";
import Documentation from "./Documentation/Documentation";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <Route path="/documentation" component={Documentation} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    const location = useLocation();
    const token = localStorage.getItem("token");
    const date = new Date().getTime() / 1000;
    const data = jwt.decode(token);
    if (date < data.exp) {
      return (
        <Route
          {...rest}
          render={props => React.createElement(component, props)}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            from: location
          }}
        />
      );
    }
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/"
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
