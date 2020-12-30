import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Close as CloseIcon } from "@material-ui/icons";
import useStyles from './styles';
// components
import Layout from "./Layout";
import Documentation from "./Documentation/Documentation";

// pages
import Error from "../pages/error";
import Login from "../pages/login";
import Verify from "../pages/verify";
import Reset from "../pages/reset";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  const isAuth = isAuthenticated()
  const classes = useStyles();
  function CloseButton({ closeToast, className }) {
    return <CloseIcon className={className} onClick={closeToast} />;
  }

  return (
    <>
    <ToastContainer
      className={classes.toastsContainer}
      closeButton={
        <CloseButton className={classes.notificationCloseButton} />
      }
      closeOnClick={false}
      progressClassName={classes.notificationProgress}
    />
      <HashRouter>
        <Switch>
          {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} /> */}
          <Route exact path="/" render={() => <Redirect to="/app/profile" />} />

          <Route
            exact
            path="/app"
            // render={() => <Redirect to="/app/dashboard" />}
            render={() => <Redirect to="/app/profile" />}

          />
          <Route path="/documentation" component={Documentation} />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/verify-email" exact component={Verify} />
          <PublicRoute path="/password-reset" exact component={Reset}/>
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            isAuth ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            isAuth ? (
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
