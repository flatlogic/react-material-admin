import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from '../Footer'
import { Link } from '../../components/Wrappers'

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
import Modal from "../../pages/modal";
import Navbar from "../../pages/nav/Navbar";
import Tooltips from "../../pages/tooltips";
import Tabs from "../../pages/tabs";
import FormsElements from "../../pages/forms/elements";
import Cards from "../../pages/cards";
import DynamicTables from '../../pages/tables/dynamic'

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
            <Route path="/app/ui/notifications" component={Notifications} />
            <Route path="/app/forms/elements" component={FormsElements} />
            <Route path="/app/ui/badge" component={Badge} />
            <Route path="/app/ui/сarousel" component={Carousel} />
            <Route path="/app/ui/modal" component={Modal} />
            <Route path="/app/ui/navbar" component={Navbar} />
            <Route path="/app/ui/tooltips" component={Tooltips} />
            <Route path="/app/ui/tabs" component={Tabs} />
            <Route path="/app/ui/cards" component={Cards} />
            <Route path="/app/tables/static" component={Tables} />
            <Route path="/app/tables/dynamic" component={DynamicTables} />
            <Route
              exact
              path="/app/tables"
              render={() => <Redirect to={"/app/tables/static"} />}
            />
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
            <Route
              exact
              path="/app/forms"
              render={() => <Redirect to="/app/forms/elements" />}
            />
            <Route path="/app/charts" component={Charts} />
            <Route path="/app/maps" component={Maps} />
            <Route path="/app/core/colors" component={Colors} />
            <Route path="/app/ui/icons" component={Icons} />
          </Switch>
        <Footer>
          <>
          <Link color={"primary"} href={"https://flatlogic.com/"} target={"_blank"} className={classes.link}>Flatlogic</Link>
          <Link color={"primary"} href={"https://flatlogic.com/about"} target={"_blank"} className={classes.link}>About Us</Link>
          <Link color={"primary"} href={"https://flatlogic.com/blog"} target={"_blank"} className={classes.link}>Blog</Link>
            </>
          <>

            </>
        </Footer>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
