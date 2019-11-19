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
import Licences from "./pages/licences";
import Start from "./pages/start";
import Pages from "./pages/pages";
import TypographyPage from "./pages/typography";
import WidgetPage from "./pages/widget";
import Libs from "./pages/libs";

//components
import Header from "./components/Header";
import Sidebar from "../../components/Sidebar";
import structure from "./components/Sidebar/SidebarStructure";
import Widget from "../Widget";

import { Button, Typography } from "../Wrappers";
import classnames from "classnames";

//context
import { useLayoutState } from "../../context/LayoutContext";
import { Box, Breadcrumbs, Grid, IconButton } from "@material-ui/core";

import { NavigateNext as NavigateNextIcon } from "@material-ui/icons";

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
        <Widget disableWidgetMenu inheritHeight className={classes.margin}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {structure.map(c => {
              if (
                !c.children &&
                window.location.hash.includes(c.link) &&
                c.link
              ) {
                return (
                  <Box display="flex" alignItems="center" key={c.id}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Typography variant="h4">{c.label}</Typography>
                    </Breadcrumbs>
                  </Box>
                );
              } else if (c.children) {
                return c.children.map(currentInner => {
                  if (window.location.hash.includes(currentInner.link)) {
                    return (
                      <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        key={c.id}
                      >
                        <Typography variant={"h6"}>{c.label}</Typography>
                        <Typography color="primary" variant={"h6"}>
                          {currentInner.label}
                        </Typography>
                      </Breadcrumbs>
                    );
                  }
                });
              }
            })}
          </Grid>
        </Widget>
        <Switch>
          <Route path={path} exact>
            <Redirect to={`${path}/getting-started/overview`} />
          </Route>
          <Route path={`${path}/getting-started/overview`}>
            <Overview />
          </Route>
          <Route path={`${path}/getting-started/licences`}>
            <Licences />
          </Route>
          <Route path={`${path}/getting-started/quick-start`}>
            <Start />
          </Route>
          <Route path={`${path}/pages`}>
            <Pages />
          </Route>
          <Route path={`${path}/components/typography`}>
            <TypographyPage />
          </Route>
          <Route path={`${path}/components/widget`}>
            <WidgetPage />
          </Route>
          <Route path={`${path}/libs`}>
            <Libs />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Documentation);
