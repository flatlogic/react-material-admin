import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  withRouter
} from "react-router-dom";

//styles
import useStyles from "./styles";

//pages
import Overview from "./pages/overview";

//components
import Header from "./components/Header";
import Sidebar from "../../components/Sidebar";
import structure from "./components/Sidebar/SidebarStructure";
import classnames from "classnames";

//context
import { useLayoutState } from "../../context/LayoutContext";

const Documentation = props => {
  // global
  var layoutState = useLayoutState();
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar structure={structure} />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened
        })}
      >
        <div className={classes.fakeToolbar} />
        <Switch>
          <Route path={path} exact>
            <Redirect to={`${path}/getting-started/overview`} />
          </Route>
          <Route path={`${path}/getting-started/overview`}>
            <Overview />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Documentation);
