import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Colors from "../../pages/colors";
import Grid from "../../pages/grid";
import Badge from "../../pages/badge";
import Carousel from "../../pages/сarousel";
import Modal from "../../pages/modal"

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/core/typography" component={Typography} />
            <Route path="/app/core/grid" component={Grid} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/ui/notifications" component={Notifications} />
            <Route path="/app/ui/badge" component={Badge} />
            <Route path="/app/ui/сarousel" component={Carousel} />
            <Route path="/app/ui/modal" component={Modal} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route
              exact
              path="/app/core"
              render={() => <Redirect to="/app/core/typography" />}
            />
            <Route path="/app/charts" component={Charts} />
            <Route path="/app/maps" component={Maps} />
            <Route path="/app/core/colors" component={Colors} />
            <Route path="/app/ui/icons" component={Icons} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
