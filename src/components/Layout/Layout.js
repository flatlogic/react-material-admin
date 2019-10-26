import React, { useState, useEffect, useRef } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import Icon from "@mdi/react";
import {
  mdiSettings as SettingsIcon,
  mdiFacebookBox as FacebookIcon,
  mdiTwitterBox as TwitterIcon,
  mdiGithubBox as GithubIcon,
} from "@mdi/js";
import {
  Grow,
  Fab,
  IconButton,
  Popover,
  FormControlLabel,
  RadioGroup,
  Box,
  Radio,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { Link, Typography } from "../../components/Wrappers";
import { Pop } from "./LayoutView";

// pages
import Dashboard from "../../pages/dashboard";
import TypographyPage from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import LineCharts from "../../pages/charts/LineCharts";
import BarCharts from "../../pages/charts/BarCharts";
import PieCharts from "../../pages/charts/PieCharts";
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
import DynamicTables from "../../pages/tables/dynamic";
import Widget from "../../pages/widget";
import Progress from "../../pages/progress";
import Ecommerce from "../../pages/ecommerce";
import Product from "../../pages/ecommerce/Products";
import ProductsGrid from "../../pages/ecommerce/ProductsGrid";
import MapsGoogle from "../../pages/maps";
import VectorMaps from "../../pages/maps/VectorMap";
import Timeline from "../../pages/timeline";
import Search from "../../pages/search";
import Gallery from "../../pages/gallery";
import Invoice from "../../pages/invoice";
import CreateProduct from "../../pages/ecommerce/CreateProduct";

// context
import { useLayoutState, useLayoutDispatch } from "../../context/LayoutContext";

/* const useForceUpdate = () => {
  const [state, setState] = useState(false);
  return setState;
}; */

function Layout(props) {
  var classes = useStyles();
  const [state, setState] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = e => {
    localStorage.setItem("theme", e.target.value);
    layoutDispatch({ type: "TOGGLE_COLOR_THEME", theme: e.target.value });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /* const forceUpdate = useForceUpdate();
  console.log("rendering");
  useEffect(() => {
    forceUpdate(true);
  }, []); */
  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <Grow in={state} style={{ transformOrigin: "0 0 0" }}>
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/core/typography" component={TypographyPage} />
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
              <Route path="/app/ui/widget" component={Widget} />
              <Route path="/app/ui/progress" component={Progress} />
              <Route path="/app/tables/static" component={Tables} />
              <Route path="/app/tables/dynamic" component={DynamicTables} />
              <Route path="/app/charts/overview" component={Charts} />
              <Route path="/app/charts/line" component={LineCharts} />
              <Route path="/app/charts/bar" component={BarCharts} />
              <Route path="/app/charts/pie" component={PieCharts} />
              <Route
                exact
                path="/app/ecommerce/management"
                component={Ecommerce}
              />
              <Route
                path="/app/ecommerce/management/create"
                component={CreateProduct}
              />
              <Route path="/app/ecommerce/product/:id" component={Product} />
              <Route path="/app/ecommerce/product" component={Product} />
              <Route
                path="/app/ecommerce/gridproducts"
                component={ProductsGrid}
              />
              <Route
                exact
                path="/app/tables"
                render={() => <Redirect to={"/app/tables/static"} />}
              />
              <Route
                exact
                path="/app/charts"
                render={() => <Redirect to={"/app/charts/overview"} />}
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
              <Route
                exact
                path="/app/ecommerce"
                render={() => <Redirect to="/app/ecommerce/management" />}
              />
              <Route
                exact
                path="/app/extra"
                render={() => <Redirect to="/app/extra/timeline" />}
              />
              <Route
                exact
                path="/app/maps"
                render={() => <Redirect to="/app/maps/google" />}
              />
              <Route path="/app/extra/timeline" component={Timeline} />
              <Route path="/app/extra/search" component={Search} />
              <Route path="/app/extra/gallery" component={Gallery} />
              <Route path="/app/extra/invoice" component={Invoice} />
              <Route
                path="/app/extra/login"
                children={() => localStorage.removeItem("id_token")}
              />
              <Route path="/app/core/colors" component={Colors} />
              <Route path="/app/maps/google" component={MapsGoogle} />
              <Route path="/app/maps/vector" component={VectorMaps} />
              <Route path="/app/ui/icons" component={Icons} />
            </Switch>
            <Pop>
              <Fab
                color="primary"
                aria-label="settings"
                onClick={e => handleClick(e)}
              >
                <Icon path={SettingsIcon} size={1} color="#fff" />
              </Fab>
            </Pop>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                m={3}
              >
                <Typography variant="body2" weight={"bold"}>
                  COLOR THEME
                </Typography>
                <RadioGroup
                  aria-label="theme"
                  value={localStorage.getItem("theme") || "default"}
                  onChange={e => handleChange(e)}
                >
                  <Box display="flex" justifyContent="space-between">
                    <FormControlLabel
                      className={classes.noneMargin}
                      value="default"
                      control={<Radio className={classes.defaultRadio} />}
                    />
                    <FormControlLabel
                      className={classes.noneMargin}
                      value="orange"
                      control={<Radio className={classes.orangeRadio} />}
                    />
                    <FormControlLabel
                      className={classes.noneMargin}
                      value="darkBlue"
                      control={<Radio className={classes.darkBlueRadio} />}
                    />
                  </Box>
                </RadioGroup>
              </Box>
            </Popover>
            <Footer>
              <div>
                <Link
                  color={"primary"}
                  href={"https://flatlogic.com/"}
                  target={"_blank"}
                  className={classes.link}
                >
                  Flatlogic
                </Link>
                <Link
                  color={"primary"}
                  href={"https://flatlogic.com/about"}
                  target={"_blank"}
                  className={classes.link}
                >
                  About Us
                </Link>
                <Link
                  color={"primary"}
                  href={"https://flatlogic.com/blog"}
                  target={"_blank"}
                  className={classes.link}
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href={"https://www.facebook.com/flatlogic"}
                  target={"_blank"}
                >
                  <IconButton aria-label="facebook">
                    <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
                  </IconButton>
                </Link>
                <Link href={"https://twitter.com/flatlogic"} target={"_blank"}>
                  <IconButton aria-label="twitter">
                    <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                  </IconButton>
                </Link>
                <Link href={"https://github.com/flatlogic"} target={"_blank"}>
                  <IconButton
                    aria-label="github"
                    style={{ padding: "12px 0 12px 12px" }}
                  >
                    <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                  </IconButton>
                </Link>
              </div>
            </Footer>
          </div>
        </Grow>
      </>
    </div>
  );
}

export default withRouter(Layout);
